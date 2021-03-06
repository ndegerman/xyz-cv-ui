(function() {
    'use strict';

    angular
        .module('xyz-cv-ui.profile')
        .factory('ProfileModel', ProfileModel);

    function ProfileModel(Model) {
        return new Model('/profile/:_id', { _id: '@_id' });
    }

})();
