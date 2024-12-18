import React from "react"
import ReactDOM from "react-dom/client"


const Title =()=>(<h1>This is Abhi</h1>)

//React Component

// const Heading1 = () => {
//     return <h1>This is heading from React Component</h1>;
// };


const Heading2 = () =>{
    return(
    <div className="heading">
       <div className="logo">
         <img src="https://img.freepik.com/free-vector/colourful-gradient-abstract-logo-template_23-2148298816.jpg?t=st=1730199564~exp=1730203164~hmac=38c3dd2a34438783dd548a543d7f26ecbc1755363912d967e23ff3b20269ce48&w=740"/>
       </div>
       <div className="heading-menu">
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
        </ul>
       </div>
    </div>
)
};

const Search = () => {
    return(
    <div className="search">
        <input type="text" className="search-inp"/> 
        <input type ="button" className="search-btn" value="Search"/>
    </div>
    );
};

const Card = ({resData}) =>{
    // const {resData} = props;
    return (
        <div className="card">
            <img className="card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}/>
            <div className="hotel-name">
            {resData.info.name}
            </div>
            <h5>
                {resData.info.cuisines.join(', ')}
                
            </h5>
            <h4>
                {resData.info.costForTwo}
            </h4>
        </div>
        
    );
};

const resList=[
        {
          "info": {
            "id": "195429",
            "name": "Sanju Ka Dhaba",
            "cloudinaryImageId": "hjao7sorzggaeqito6au",
            "locality": "Vishnu Nagar",
            "areaName": "Prasia Road",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "North Indian",
              "South Indian",
              "Chinese"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "177443",
            "avgRatingString": "4.5",
            "totalRatingsString": "1.0K+",
            "sla": {
              "deliveryTime": 55,
              "lastMileTravel": 14.9,
              "serviceability": "SERVICEABLE",
              "slaString": "50-55 mins",
              "lastMileTravelString": "14.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-10-31 22:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7393957b-5958-4d77-9860-b347b8b32ac5"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/sanju-ka-dhaba-vishnu-nagar-prasia-road-rest195429",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "234875",
            "name": "Adil Hotel",
            "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
            "locality": "Rautha Wada",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "North Indian",
              "Biryani",
              "Tandoor"
            ],
            "avgRating": 4.3,
            "parentId": "27123",
            "avgRatingString": "4.3",
            "totalRatingsString": "1.0K+",
            "sla": {
              "deliveryTime": 44,
              "lastMileTravel": 10.7,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "10.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-10-31 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹151 OFF",
              "subHeader": "ABOVE ₹349",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7393957b-5958-4d77-9860-b347b8b32ac5"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "774546",
            "name": "Shree Naivedyam",
            "cloudinaryImageId": "2274f59cb8efcfab1f446b195bcbda3b",
            "locality": "Khajri Road",
            "areaName": "Chhindwara City",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "North Indian",
              "Chinese",
              "South Indian",
              "Pizzas",
              "Beverages"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "428968",
            "avgRatingString": "4.2",
            "totalRatingsString": "67",
            "sla": {
              "deliveryTime": 57,
              "lastMileTravel": 12.3,
              "serviceability": "SERVICEABLE",
              "slaString": "55-60 mins",
              "lastMileTravelString": "12.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-10-31 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7393957b-5958-4d77-9860-b347b8b32ac5"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/shree-naivedyam-khajri-road-chhindwara-city-rest774546",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "151649",
            "name": "Hotel Sai Nath & Sai Restaurant",
            "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
            "locality": "railway station",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "North Indian",
              "South Indian",
              "Chinese",
              "Beverages",
              "Fast Food",
              "Desserts"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "101802",
            "avgRatingString": "4.3",
            "totalRatingsString": "889",
            "sla": {
              "deliveryTime": 51,
              "lastMileTravel": 11.3,
              "serviceability": "SERVICEABLE",
              "slaString": "50-55 mins",
              "lastMileTravelString": "11.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-10-31 22:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "FREE ITEM"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7393957b-5958-4d77-9860-b347b8b32ac5"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "618037",
            "name": "Jai Ganesh Bhojnalaya",
            "cloudinaryImageId": "yzgqriufpzmloogcn2vl",
            "locality": "Railway Colony",
            "areaName": "Bus stand",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "North Indian",
              "South Indian",
              "Indian",
              "Chinese"
            ],
            "avgRating": 3.9,
            "veg": true,
            "parentId": "368432",
            "avgRatingString": "3.9",
            "totalRatingsString": "247",
            "sla": {
              "deliveryTime": 48,
              "lastMileTravel": 11.3,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "11.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-10-31 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹151 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7393957b-5958-4d77-9860-b347b8b32ac5"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/jai-ganesh-bhojnalaya-railway-colony-bus-stand-rest618037",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "912754",
            "name": "Urban Cafe",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG",
            "locality": "SOUTH CIVIL LINE",
            "areaName": "Chhindwara City",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Snacks",
              "Pizzas",
              "Pastas",
              "Fast Food",
              "Burgers",
              "Cafe"
            ],
            "avgRating": 3.4,
            "veg": true,
            "parentId": "1330",
            "avgRatingString": "3.4",
            "totalRatingsString": "2",
            "sla": {
              "deliveryTime": 61,
              "lastMileTravel": 11.4,
              "serviceability": "SERVICEABLE",
              "slaString": "60-65 mins",
              "lastMileTravelString": "11.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-10-31 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7393957b-5958-4d77-9860-b347b8b32ac5"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/urban-cafe-south-civil-line-chhindwara-city-rest912754",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "151518",
            "name": "Bakery World",
            "cloudinaryImageId": "mt2aggiscfl3yviatwng",
            "locality": "Parasia Road",
            "areaName": "Parasia Road",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Bakery",
              "Ice Cream",
              "Snacks",
              "Beverages"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "40363",
            "avgRatingString": "4.2",
            "totalRatingsString": "238",
            "sla": {
              "deliveryTime": 46,
              "lastMileTravel": 12.6,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "12.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-10-31 22:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹50 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7393957b-5958-4d77-9860-b347b8b32ac5"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "213358",
            "name": "Apni Rasoi Family Dhaba",
            "cloudinaryImageId": "sidigb8zqjfrfpkrtqgl",
            "locality": "Vishnu Nagar",
            "areaName": "Parasia Road",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "North Indian",
              "Indian",
              "South Indian",
              "Chinese"
            ],
            "avgRating": 3.9,
            "veg": true,
            "parentId": "35024",
            "avgRatingString": "3.9",
            "totalRatingsString": "1.2K+",
            "sla": {
              "deliveryTime": 48,
              "lastMileTravel": 13.9,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "13.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-10-31 21:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "context": "seo-data-7393957b-5958-4d77-9860-b347b8b32ac5"
          },
          "cta": {
            "link": "https://www.swiggy.com/city/chhindwara/apni-rasoi-family-dhaba-vishnu-nagar-parasia-road-rest213358",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
];

const Body = () => (
    <div class="body">
        {resList.map((restaurant) => <Card resData = {restaurant} />)}
    </div>
);

const Main = () => {
    return (<div className="main">
        <Heading2/>
        <Search/>
        <Body/>
    </div>
    );
};


// const Heading3 = () => <div id="main"><h1>This is heading Component from main</h1></div>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main/>);
