define([
        '../module',
        '../namespace'
    ],
    function (module, moduleNS) {
        'use strict';
        var name = moduleNS + ".emailService";
        var dependencies = ["$q"];
        var service = function ($q) {

            var emails = [
                {
                    "id": 1,
                    "subject": "Flipkart mega sales",
                    "body": " This is a Facebook styled Card. The header is created from a Thumbnail List item, the content is from a card-body                                consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-                                    footer.",
                    "time": "23/10/214",
                },
                {
                    "id": 2,
                    "subject": "Jabong offers",
                    "body": " This is a Facebook styled Card. The header is created from a Thumbnail List item, the content is from a card-body                                consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-                                    footer.",
                    "time": "22/10/214",
                },
                {
                    "id": 3,
                    "subject": "You got a job",
                    "body": "This is a Facebook styled Card. The header is created from a Thumbnail List item, the content is from a card-body                                consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-                                    footer.",
                    "time": "24/10/214",
                },
                {
                    "id": 4,
                    "subject": "You got a job",
                    "body": "This is a Facebook styled Card. The header is created from a Thumbnail List item, the content is from a card-body                                consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-                                    footer.",
                    "time": "24/10/214",
                },
                {
                    "id": 5,
                    "subject": "You got a job",
                    "body": "This is a Facebook styled Card. The header is created from a Thumbnail List item, the content is from a card-body                                consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-                                    footer.",
                    "time": "24/10/214",
                },
                {
                    "id": 5,
                    "subject": "You got a job",
                    "body": "This is a Facebook styled Card. The header is created from a Thumbnail List item, the content is from a card-body                                consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-                                    footer.",
                    "time": "24/10/214",
                }

            ];

            return {
                getEmails: function () {
                    var deferred = $q.defer();
                    deferred.resolve(emails);
                    return deferred.promise;
                }
            };
        };

        module.factory(name, dependencies.concat(service));
    });