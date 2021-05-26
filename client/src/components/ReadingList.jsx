import React, { useState, useEffect } from 'react';
import Book from './Book';
import Carousel from '../widgets/Carousel';

const data = [
  {
      "kind": "books#volume",
      "id": "f280CwAAQBAJ",
      "etag": "BxmImKBMxRU",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/f280CwAAQBAJ",
      "volumeInfo": {
          "title": "Harry Potter: The Complete Collection (1-7)",
          "authors": [
              "J.K. Rowling"
          ],
          "publisher": "Pottermore Publishing",
          "publishedDate": "2015-12-14",
          "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide. Having now become classics of our time, the Harry Potter ebooks never fail to bring comfort and escapism to readers of all ages. With its message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers.",
          "industryIdentifiers": [
              {
                  "type": "ISBN_13",
                  "identifier": "9781781106464"
              },
              {
                  "type": "ISBN_10",
                  "identifier": "1781106460"
              }
          ],
          "readingModes": {
              "text": true,
              "image": false
          },
          "pageCount": 4236,
          "printType": "BOOK",
          "categories": [
              "Young Adult Fiction"
          ],
          "averageRating": 4,
          "ratingsCount": 45,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.20.19.0.preview.2",
          "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
          },
          "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=f280CwAAQBAJ&dq=harry-potter&hl=&cd=1&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=f280CwAAQBAJ&dq=harry-potter&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_The_Complete_Collection_1_7.html?hl=&id=f280CwAAQBAJ"
      },
      "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
      },
      "accessInfo": {
          "country": "US",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
              "isAvailable": true
          },
          "pdf": {
              "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=f280CwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
      },
      "searchInfo": {
          "textSnippet": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide."
      }
  },
  {
      "kind": "books#volume",
      "id": "3YUrtAEACAAJ",
      "etag": "/afLJrWJs0I",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/3YUrtAEACAAJ",
      "volumeInfo": {
          "title": "Harry Potter and the Sorcerer's Stone",
          "authors": [
              "J. K. Rowling"
          ],
          "publisher": "Arthur A. Levine Books",
          "publishedDate": "2018-06-26",
          "description": "A special new edition in celebration of the 20th anniversary of the publication of Harry Potter and the Sorcerer's Stone, with a stunning new cover illustration by Caldecott Medalist Brian Selznick. Harry Potter has never been the star of a Quidditch team, scoring points while riding a broom far above the ground. He knows no spells, has never helped to hatch a dragon, and has never worn a cloak of invisibility. All he knows is a miserable life with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley - a great big swollen spoiled bully. Harry's room is a tiny closet at the foot of the stairs, and he hasn't had a birthday party in eleven years. But all that is about to change when a mysterious letter arrives by owl messenger: a letter with an invitation to an incredible place that Harry - and anyone who reads about him - will find unforgettable. For it's there that he finds not only friends, aerial sports, and magic in everything from classes to meals, but a great destiny that's been waiting for him... if Harry can survive the encounter. This gorgeous new edition in celebration of the 20th anniversary of the publication of Harry Potter and the Sorcerer's Stone features a newly designed cover illustrated by Caldecott Medalist Brian Selznick, as well as the beloved original interior decorations by Mary GrandPré.",
          "industryIdentifiers": [
              {
                  "type": "ISBN_10",
                  "identifier": "133829914X"
              },
              {
                  "type": "ISBN_13",
                  "identifier": "9781338299144"
              }
          ],
          "readingModes": {
              "text": false,
              "image": false
          },
          "pageCount": 336,
          "printType": "BOOK",
          "categories": [
              "Juvenile Fiction"
          ],
          "averageRating": 4.5,
          "ratingsCount": 1551,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
          },
          "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=3YUrtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=3YUrtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=3YUrtAEACAAJ&dq=harry-potter&hl=&cd=2&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=3YUrtAEACAAJ&dq=harry-potter&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Sorcerer_s_Stone.html?hl=&id=3YUrtAEACAAJ"
      },
      "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
      },
      "accessInfo": {
          "country": "US",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
              "isAvailable": false
          },
          "pdf": {
              "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=3YUrtAEACAAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
      },
      "searchInfo": {
          "textSnippet": "&quot;Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School for Witchcraft and Wizardry&quot;--OCLC."
      }
  },
  {
      "kind": "books#volume",
      "id": "lMM4jgEACAAJ",
      "etag": "e/4C0o3DmnQ",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/lMM4jgEACAAJ",
      "volumeInfo": {
          "title": "Harry Potter Coloring Book",
          "authors": [
              "Inc. Scholastic"
          ],
          "publisher": "Scholastic Incorporated",
          "publishedDate": "2015-11-10",
          "description": "Packed with stunning pieces of artwork from the Warner Bros. archive, this deluxe coloring book gives fans the chance to color in the vivid settings and beloved characters of J.K. Rowling's wizarding world. Containing intricate line drawings used in the making of the Harry Potter films, this coloring book includes fan-favorite scenes, creatures, and characters: from Dobby and baby Norbert to Quidditch games and the unforgettable final battle between Harry and Lord Voldemort. Unique and interactive, Harry Potter: The Official Coloring Book is a perfect collector's item for all fans of the blockbuster saga--whether it's for those who grew up with Harry, Ron, and Hermione, or those who are discovering the magic for the very first time.",
          "industryIdentifiers": [
              {
                  "type": "ISBN_10",
                  "identifier": "1338029991"
              },
              {
                  "type": "ISBN_13",
                  "identifier": "9781338029994"
              }
          ],
          "readingModes": {
              "text": false,
              "image": false
          },
          "pageCount": 96,
          "printType": "BOOK",
          "categories": [
              "Juvenile Fiction"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=lMM4jgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=lMM4jgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "un",
          "previewLink": "http://books.google.com/books?id=lMM4jgEACAAJ&dq=harry-potter&hl=&cd=3&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=lMM4jgEACAAJ&dq=harry-potter&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_Coloring_Book.html?hl=&id=lMM4jgEACAAJ"
      },
      "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
      },
      "accessInfo": {
          "country": "US",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
              "isAvailable": false
          },
          "pdf": {
              "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=lMM4jgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
      },
      "searchInfo": {
          "textSnippet": "Filled with intricate illustrations and elaborate designs used in the making of the Harry Potter films, this book invites you to imbue the wizarding world with color in your own explorations of Hogwarts Castle, the Forbidden Forest, and ..."
      }
  },
  {
      "kind": "books#volume",
      "id": "1XP_tQEACAAJ",
      "etag": "dyCDlJEdxjU",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/1XP_tQEACAAJ",
      "volumeInfo": {
          "title": "Harry Potter",
          "subtitle": "The Illustrated Collection",
          "authors": [
              "J. K. Rowling"
          ],
          "publisher": "Harry Potter",
          "publishedDate": "2018-09-25",
          "industryIdentifiers": [
              {
                  "type": "ISBN_10",
                  "identifier": "133831291X"
              },
              {
                  "type": "ISBN_13",
                  "identifier": "9781338312911"
              }
          ],
          "readingModes": {
              "text": false,
              "image": false
          },
          "printType": "BOOK",
          "categories": [
              "Juvenile Fiction"
          ],
          "averageRating": 5,
          "ratingsCount": 3,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
          },
          "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=1XP_tQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=1XP_tQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=1XP_tQEACAAJ&dq=harry-potter&hl=&cd=4&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=1XP_tQEACAAJ&dq=harry-potter&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter.html?hl=&id=1XP_tQEACAAJ"
      },
      "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
      },
      "accessInfo": {
          "country": "US",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
              "isAvailable": false
          },
          "pdf": {
              "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=1XP_tQEACAAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
      },
      "searchInfo": {
          "textSnippet": "Gorgeously illustrated in full color by award-winning artist Kay, the first three books in Rowling&#39;s beloved Harry Potter series--&quot;Harry Potter and the Sorcerer&#39;s Stone, Harry Potter and the Chamber of Secrets, &quot; and &quot;Harry Potter and the ..."
      }
  },
  {
      "kind": "books#volume",
      "id": "-5bnswEACAAJ",
      "etag": "8oFIXyG+UOQ",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/-5bnswEACAAJ",
      "volumeInfo": {
          "title": "Harry Potter: Magical Film Projections: Quidditch",
          "authors": [
              "Insight Editions"
          ],
          "publisher": "Candlewick Press (MA)",
          "publishedDate": "2017-09-27",
          "description": "The wizarding world's favorite sport, Quidditch is a magical game played high up in the air. Using black line illustrations on framed acetate pages, this interactive book allows fans to project their favorite Quidditch scenes from the Harry Potter films on a wall or ceiling using a flashlight. 7 1/2 x 9.",
          "industryIdentifiers": [
              {
                  "type": "ISBN_10",
                  "identifier": "0763695874"
              },
              {
                  "type": "ISBN_13",
                  "identifier": "9780763695873"
              }
          ],
          "readingModes": {
              "text": false,
              "image": false
          },
          "pageCount": 16,
          "printType": "BOOK",
          "categories": [
              "Juvenile Fiction"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
          },
          "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=-5bnswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=-5bnswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=-5bnswEACAAJ&dq=harry-potter&hl=&cd=5&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=-5bnswEACAAJ&dq=harry-potter&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_Magical_Film_Projections_Qu.html?hl=&id=-5bnswEACAAJ"
      },
      "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
      },
      "accessInfo": {
          "country": "US",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
              "isAvailable": false
          },
          "pdf": {
              "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=-5bnswEACAAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
      },
      "searchInfo": {
          "textSnippet": "Using black line illustrations on framed acetate pages, this interactive book allows fans to project their favorite Quidditch scenes from the Harry Potter films on a wall or ceiling using a flashlight. 7 1/2 x 9."
      }
  },
  {
      "kind": "books#volume",
      "id": "xdHoDwAAQBAJ",
      "etag": "9qCliEr0muM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/xdHoDwAAQBAJ",
      "volumeInfo": {
          "title": "For the Love of Books",
          "subtitle": "Designing and Curating a Home Library",
          "authors": [
              "Thatcher Wine",
              "Elizabeth Lane"
          ],
          "publisher": "Gibbs Smith",
          "publishedDate": "2020-06-02",
          "description": "A celebration of the meaning and comfort printed books bring to our homes and lives, from the curation and design experts at Juniper Books. Explore the significance of the home library, embellished with alluring photography and illustrations, in a keepsake worthy of any bibliophile’s collection. For the Love of Books shares the vision of Juniper Books, a business that embraces the roles that books fulfill in our lives and their staying power. It recounts the history of books and private libraries, and champions the resilience of books in the digital era. Dive into the nuances that define books for reading, books for decoration, and books for inspiration. Instructive chapters provide useful details for creating and curating one’s own home library, whether it be a single shelf or multiple rooms each with their own collection. You will never look at your bookshelves the same way again. For the Love of Books is about storytelling beyond the pages of our favorite books. Our books—the ones we choose to keep—tell the story of who we are. They remind us who we once were and who we aspire to be. Thatcher Wine founded Juniper Books in 2001. The company creates custom libraries and has perfected the art of turning books inside out to allow for books to tell stories not just to us, but about us. Working with booklovers, homeowners, and designers, Juniper Books has provided the world with a fresh new approach to the printed book. Thatcher grew up in New York City where his parents owned and operated The Quilted Giraffe, one of the most innovative restaurants in America. Thatcher graduated from Dartmouth College with a degree in history and art history and lives in Boulder, Colorado. Elizabeth Lane is the founder of Quarterlane, a quarterly subscription book service which merged with Juniper Books in 2018. She is also the book buyer for her local independent bookstore, Partners Village Store and Kitchen in Westport, Massachusetts. Prior to working in books, Elizabeth worked in contemporary visual art—in galleries, nonprofit initiatives and museums in New York, Austin, and Chicago. Elizabeth graduated from Davidson College with a degree in art history and received her masters degree from the School of the Art Institute of Chicago.",
          "industryIdentifiers": [
              {
                  "type": "ISBN_13",
                  "identifier": "9781423652168"
              },
              {
                  "type": "ISBN_10",
                  "identifier": "1423652169"
              }
          ],
          "readingModes": {
              "text": true,
              "image": true
          },
          "pageCount": 264,
          "printType": "BOOK",
          "categories": [
              "House & Home"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
          },
          "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=xdHoDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=xdHoDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=xdHoDwAAQBAJ&printsec=frontcover&dq=harry-potter&hl=&cd=6&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=xdHoDwAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=xdHoDwAAQBAJ"
      },
      "saleInfo": {
          "country": "US",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
              "amount": 29.99,
              "currencyCode": "USD"
          },
          "retailPrice": {
              "amount": 29.99,
              "currencyCode": "USD"
          },
          "buyLink": "https://play.google.com/store/books/details?id=xdHoDwAAQBAJ&rdid=book-xdHoDwAAQBAJ&rdot=1&source=gbs_api",
          "offers": [
              {
                  "finskyOfferType": 1,
                  "listPrice": {
                      "amountInMicros": 29990000,
                      "currencyCode": "USD"
                  },
                  "retailPrice": {
                      "amountInMicros": 29990000,
                      "currencyCode": "USD"
                  },
                  "giftable": true
              }
          ]
      },
      "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
              "isAvailable": true,
              "acsTokenLink": "http://books.google.com/books/download/For_the_Love_of_Books-sample-epub.acsm?id=xdHoDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
              "isAvailable": true,
              "acsTokenLink": "http://books.google.com/books/download/For_the_Love_of_Books-sample-pdf.acsm?id=xdHoDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=xdHoDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
      },
      "searchInfo": {
          "textSnippet": "You will never look at your bookshelves the same way again. For the Love of Books is about storytelling beyond the pages of our favorite books. Our books—the ones we choose to keep—tell the story of who we are."
      }
  },
  {
      "kind": "books#volume",
      "id": "kLAoswEACAAJ",
      "etag": "ENLzXPUCkkM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/kLAoswEACAAJ",
      "volumeInfo": {
          "title": "Harry Potter and the Cursed Child",
          "authors": [
              "J. K. Rowling",
              "Jack Thorne",
              "John Tiffany"
          ],
          "publisher": "Sphere",
          "publishedDate": "2017-07-25",
          "description": "The official playscript of the original West End production of Harry Potter and the Cursed Child. It was always difficult being Harry Potter and it isn't much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places. The playscript for Harry Potter and the Cursed Child was originally released as a 'special rehearsal edition' alongside the opening of Jack Thorne's play in London's West End in summer 2016. Based on an original story by J.K. Rowling, John Tiffany and Jack Thorne, the play opened to rapturous reviews from theatregoers and critics alike, while the official playscript became an immediate global bestseller. This revised paperback edition updates the 'special rehearsal edition' with the conclusive and final dialogue from the play, which has subtly changed since its rehearsals, as well as a conversation piece between director John Tiffany and writer Jack Thorne, who share stories and insights about reading playscripts. This edition also includes useful background information including the Potter family tree and a timeline of events from the wizarding world prior to the beginning of Harry Potter and the Cursed Child.",
          "industryIdentifiers": [
              {
                  "type": "ISBN_10",
                  "identifier": "0751565369"
              },
              {
                  "type": "ISBN_13",
                  "identifier": "9780751565362"
              }
          ],
          "readingModes": {
              "text": false,
              "image": false
          },
          "pageCount": 352,
          "printType": "BOOK",
          "categories": [
              "Fiction"
          ],
          "averageRating": 3.5,
          "ratingsCount": 184,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
          },
          "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=kLAoswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=kLAoswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=kLAoswEACAAJ&dq=harry-potter&hl=&cd=7&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=kLAoswEACAAJ&dq=harry-potter&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Cursed_Child.html?hl=&id=kLAoswEACAAJ"
      },
      "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
      },
      "accessInfo": {
          "country": "US",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
              "isAvailable": false
          },
          "pdf": {
              "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=kLAoswEACAAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
      },
      "searchInfo": {
          "textSnippet": "As an overworked employee of the Ministry of Magic, a husband, and a father, Harry Potter struggles with a past that refuses to stay where it belongs while his youngest son, Albus, finds the weight of the family legacy difficult to bear."
      }
  },
  {
      "kind": "books#volume",
      "id": "tbLsxgEACAAJ",
      "etag": "SADEdBgok1s",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/tbLsxgEACAAJ",
      "volumeInfo": {
          "title": "Harry Potter: A Pop-Up Guide to Diagon Alley and Beyond",
          "authors": [
              "Matthew Reinhart"
          ],
          "publisher": "Insight Editions",
          "publishedDate": "2020-10-20",
          "description": "Journey into the Wizarding World once more with this stunning new masterpiece from New York Times best-selling paper engineer Matthew Reinhart. This exhilarating pop-up book invites you to relive the movie adventures of Hermione Granger, Ron Weasley, and the Boy Who Lived—Harry Potter—as you explore London’s magical Diagon Alley like never before. Inside, gorgeously intricate pop-up spreads render fan-favorite Diagon Alley establishments such as Ollivanders, Weasleys’ Wizard Wheezes, and the Leaky Cauldron, plus other locales like the Ministry of Magic and platform nine and three-quarters. Pull tabs allow fans to command the action—rescue a Ukrainian Ironbelly dragon from the depths of Gringotts, or help Harry navigate out of Knockturn Alley after a Floo powder mishap. Alongside each pop, discover facts and insights from the making of the Harry Potter films. Plus, the book opens into a displayable 3D diorama of all the pop-ups at once. Packed with amazing moments and hidden surprises, Harry Potter: A Pop-Up Guide to Diagon Alley and Beyond is a landmark new pop-up book guaranteed to impress Harry Potter fans everywhere.",
          "industryIdentifiers": [
              {
                  "type": "ISBN_10",
                  "identifier": "1683839188"
              },
              {
                  "type": "ISBN_13",
                  "identifier": "9781683839187"
              }
          ],
          "readingModes": {
              "text": false,
              "image": false
          },
          "pageCount": 10,
          "printType": "BOOK",
          "categories": [
              "Performing Arts"
          ],
          "averageRating": 3,
          "ratingsCount": 1,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
          },
          "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=tbLsxgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=tbLsxgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=tbLsxgEACAAJ&dq=harry-potter&hl=&cd=8&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=tbLsxgEACAAJ&dq=harry-potter&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_A_Pop_Up_Guide_to_Diagon_Al.html?hl=&id=tbLsxgEACAAJ"
      },
      "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
      },
      "accessInfo": {
          "country": "US",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
              "isAvailable": false
          },
          "pdf": {
              "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=tbLsxgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
      },
      "searchInfo": {
          "textSnippet": "Alongside each pop, discover facts and insights from the making of the Harry Potter films. Plus, the book opens into a displayable 3D diorama of all the pop-ups at once."
      }
  },
  {
      "kind": "books#volume",
      "id": "5iTebBW-w7QC",
      "etag": "jWlukR9xbOw",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/5iTebBW-w7QC",
      "volumeInfo": {
          "title": "Harry Potter and the Chamber of Secrets",
          "authors": [
              "J.K. Rowling"
          ],
          "publisher": "Pottermore Publishing",
          "publishedDate": "2015-12-08",
          "description": "'There is a plot, Harry Potter. A plot to make most terrible things happen at Hogwarts School of Witchcraft and Wizardry this year.' Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true. Having now become classics of our time, the Harry Potter ebooks never fail to bring comfort and escapism to readers of all ages. With its message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers.",
          "industryIdentifiers": [
              {
                  "type": "ISBN_13",
                  "identifier": "9781781100509"
              },
              {
                  "type": "ISBN_10",
                  "identifier": "1781100500"
              }
          ],
          "readingModes": {
              "text": true,
              "image": true
          },
          "pageCount": 341,
          "printType": "BOOK",
          "categories": [
              "Fiction"
          ],
          "averageRating": 4.5,
          "ratingsCount": 2388,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "2.23.20.0.preview.3",
          "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
          },
          "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=5iTebBW-w7QC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=5iTebBW-w7QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=5iTebBW-w7QC&printsec=frontcover&dq=harry-potter&hl=&cd=9&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=5iTebBW-w7QC&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=5iTebBW-w7QC"
      },
      "saleInfo": {
          "country": "US",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
              "amount": 9.99,
              "currencyCode": "USD"
          },
          "retailPrice": {
              "amount": 9.99,
              "currencyCode": "USD"
          },
          "buyLink": "https://play.google.com/store/books/details?id=5iTebBW-w7QC&rdid=book-5iTebBW-w7QC&rdot=1&source=gbs_api",
          "offers": [
              {
                  "finskyOfferType": 1,
                  "listPrice": {
                      "amountInMicros": 9990000,
                      "currencyCode": "USD"
                  },
                  "retailPrice": {
                      "amountInMicros": 9990000,
                      "currencyCode": "USD"
                  },
                  "giftable": true
              }
          ]
      },
      "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
              "isAvailable": true,
              "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_and_the_Chamber_of_Secrets-sample-epub.acsm?id=5iTebBW-w7QC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
              "isAvailable": true,
              "acsTokenLink": "http://books.google.com/books/download/Harry_Potter_and_the_Chamber_of_Secrets-sample-pdf.acsm?id=5iTebBW-w7QC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=5iTebBW-w7QC&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
      },
      "searchInfo": {
          "textSnippet": "With its message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers."
      }
  },
  {
      "kind": "books#volume",
      "id": "utWSuAAACAAJ",
      "etag": "dZ4WdecXGPA",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/utWSuAAACAAJ",
      "volumeInfo": {
          "title": "Harry Potter and the Sorcerer's Stone",
          "authors": [
              "J. K. Rowling"
          ],
          "publisher": "Large Print Press",
          "publishedDate": "1999",
          "description": "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School for Witchcraft and Wizardry.",
          "industryIdentifiers": [
              {
                  "type": "ISBN_10",
                  "identifier": "0786222727"
              },
              {
                  "type": "ISBN_13",
                  "identifier": "9780786222728"
              }
          ],
          "readingModes": {
              "text": false,
              "image": false
          },
          "pageCount": 422,
          "printType": "BOOK",
          "categories": [
              "Juvenile Fiction"
          ],
          "averageRating": 4.5,
          "ratingsCount": 1546,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=utWSuAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=utWSuAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "un",
          "previewLink": "http://books.google.com/books?id=utWSuAAACAAJ&dq=harry-potter&hl=&cd=10&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=utWSuAAACAAJ&dq=harry-potter&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Sorcerer_s_Stone.html?hl=&id=utWSuAAACAAJ"
      },
      "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
      },
      "accessInfo": {
          "country": "US",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
              "isAvailable": false
          },
          "pdf": {
              "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=utWSuAAACAAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
      },
      "searchInfo": {
          "textSnippet": "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School for Witchcraft and Wizardry."
      }
  }
]


const ReadingList = () => {
  const [books, updateBooks] = useState();

  const deleteBook = (index) => {
    console.log(index);
  };

  const getBooks = () => {
    updateBooks(data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
      <div className="reading-list">
          <h2>Reading List</h2>
          {books ?
            <Carousel className="reading-section" clickHandler={deleteBook}>
                { books.map((book, index) => {
                    let volume = book.volumeInfo;
                    let smallThumbnail = volume.imageLinks.smallThumbnail;
                    return (<Book key={index} smallThumbnail={smallThumbnail} index={index} deleteBook={deleteBook} />)
                   })
                }
            </Carousel>
          : <></>
          }
      </div>

  );
};

export default ReadingList;
