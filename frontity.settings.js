const settings = {
    "name": "frontity-poc",
    "state": {
        "frontity": {
            "url": "https://test.frontity.org",
            "title": "Joseph Gordy dev blog",
            "description": "Fontity POC application"
        }
    },
    "packages": [
        {
            "name": "@frontity/mars-theme",
            "state": {
                "theme": {
                    "menu": [
                        [
                            "Home",
                            "/"
                        ],
                        [
                            "About",
                            "/about"
                        ],
                        [
                            "Travel",
                            "/category/travel/"
                        ],
                        [
                            "Programming",
                            "/category/programming"
                        ],
                    ],
                    "featured": {
                        "showOnList": false,
                        "showOnPost": false
                    }
                }
            }
        },
        {
            "name": "@frontity/wp-source",
            "state": {
                "source": {
                    "api": "https://public-api.wordpress.com/wp/v2/sites/josephgordy.wordpress.com"
                }
            }
        },
        "@frontity/tiny-router",
        "@frontity/html2react"
    ]
};

export default settings;
