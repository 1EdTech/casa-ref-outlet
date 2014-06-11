App.Controller.Details = {

  attachTo: function(region){

    var $region = $(region), detailsJsonString = $region.attr('data-app-details');

    $region.click(function(){

      var details = JSON.parse(detailsJsonString);

      $('main > *').hide();

      $('main').prepend(App.View.make('app-details', {
        "app":details
      }));

      $('main .app-details [data-action="close"]').click(function(e){
        e.preventDefault();
        $(this).closest('.app-details').remove();
        $('main > *').show();
      });

      if(!App.Persistence.type){
        $('main .app-details .add-app-button').hide();
        console.warn('Add button hidden because no persistence type defined');
      }

      $('main .app-details .add-app-button').click(function(e){

        e.preventDefault();

        switch(App.Persistence.type){

          case 'lti'
          :
            var $form = $(document.createElement('form'))
              .attr('action', App.Persistence.options['return'])
              .attr('method', 'POST')
              .hide();

            $(document.createElement('textarea'))
              .attr('name', 'app')
              .html(detailsJsonString)
              .appendTo($form);

            $('body').append($form);
            $form.submit();

            break;

          case 'local':

            var key = 'casa-apps',
                currentApps = localStorage.getItem(key),
                appAttributes = $.extend({}, details.attributes.use, details.attributes.require),
                app = {
                  'id': details.identity.id,
                  'originator_id': details.identity.originator_id,
                  'title': appAttributes.title,
                  'categories': appAttributes.categories,
                  'tags': appAttributes.tags,
                  'authors': appAttributes.authors,
                  'organizations': appAttributes.organizations
                }

            currentApps = currentApps ? JSON.parse(currentApps) : [];

            if(jQuery.grep(currentApps, function(currentApp){
              return app.id == currentApp.id && app.originator_id == currentApp.originator_id
            }).length == 0){
              currentApps.push(app);
              localStorage.setItem(key, JSON.stringify(currentApps));
            }
            window.location = App.Persistence.options['return'];
            break;

          default:
            console.error('Undefined App.Persistence.type -- do not know how to add');

        }
      });

    })

  }

}