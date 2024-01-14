const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
const book = getBook(2);

// destructuring  = means figure out some data from complex datastructures

// Object destructing = means figure out some property data from large objects of array like above
const { title, author, genres } = book; // here is one thing keep in mind when you destucture name of property should be same as above
console.log(title, author, genres);

// as genres iteself an array inside array of obejcts
// and if you want specific generes and it is simple bcz genres iteself is array so you can access by index
// const primaryGenre = genres[0];
// const secondGenre = genres[1];

// above array of index code is ugly so here we destruct uring the array
// [primaryGenre, secondGenre] = genres;
// console.log(primaryGenre, secondGenre);

// =============================================================================================

// rest operator (...) = rest itself name suggest contains the rest data inside ar array
// here is the rule of it always come in the end of parameters rankings or last in function parameters
// for ex:- in the above code we have primaryGenre,secondGenre and rest of genres we put in rest array

const [primaryGenre, secondGenre, ...OtherGenres] = genres;
console.log(primaryGenre, secondGenre, OtherGenres);

// spread operator (...) =  Used to spread the elements of an iterable (array, string, or object) into individual elements or properties.
// for ex:- if you want to add new properties in book id 1 that is moviePublicationDate
const updateBook = { ...book, moviePublicationDate: "2001-12-19", pages: 1000 };
// ... book = it spread all thing into objects and then we can easily put new property in book
// here adding the new property that is moviePublicationDate and overwrite the exist property that is pages
updateBook;

// Arrow function in JS = it is used for one line function
const getYear = (str) => str.split("-")[0];
console.log(getYear(book.publicationDate));

// nullish colleshing
const countOfreview = book.reviews.librarything.reviewsCount || "no data";
countOfreview; // o/p = no data as you can see that falsy value with OR operator first check book.reviews that is 0 means a falsy that it print the no data so this is the disadvantage of OR operator bcz it doesn't short circuit the falsy values so for that nullish colleshing operator comes ??

const newCountOfReviews = book.reviews.librarything.reviewsCount ?? "no data";
console.log(newCountOfReviews); // now it give 0

// optional chaining = used when we don't know that upcoming data exist or not in checking condition
// In case where book have id = 2 they have goodreads and librarything both properties
function getTotalReviewCountfor_Book_Id2(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything.reviewsCount;
  return goodreads + librarything;
}
console.log(getTotalReviewCountfor_Book_Id2(book));

// In case where book id = 3 they have goodreads only not librarything in there properties
function getTotalReviewCountfor_Book_Id3(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0; // ? == nullish colleshing
  return goodreads + librarything;
}
console.log(getTotalReviewCountfor_Book_Id3(book)); // for book id = 3 O/P will be NaN
