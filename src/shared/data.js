import { ALL_GENDERS, ANONYMOUS, FEMALE, MALE } from "./gender-flags";

export const HOME = "/";
export const BLOG = "/blog";
export const GALLERY = "/gallery";
export const CONTACTS = "/contacts";
export const NO_FOUND = "*";

const ANAKIN_IMAGE =
  "https://i0.wp.com/coffeewithkenobi.com/wp-content/uploads/2015/08/Anakin_Skywalker_RotS.png?resize=240%2C300&ssl=1";

const RAY_IMAGE =
  "https://specials-images.forbesimg.com./imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const LEIA_IAGE =
  "https://www.jacketscreator.com/wp-content/uploads/2022/05/princess-leia-organa-vest.jpg";

const KYLO_REN_IMAGE =
  "https://damion.club/uploads/posts/2022-09/1664204523_39-damion-club-p-zvezdnie-voini-kailo-ren-akter-instagram-47.jpg";

export const dataPosts = [
  {
    name: "Anakin Skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "26 лют.",
    comments: 482,
    retweet: 146,
    likes: 887,
  },
  {
    name: "Leia Organa",
    photo: LEIA_IAGE,
    nickname: "@leia_organa",
    content:
      "Seriously? Son? Kylo Ren? Did you choose the same path as your grandfather?",
    image: KYLO_REN_IMAGE,
    date: "10 берез.",
    comments: 200,
    retweet: 150,
    likes: 600,
  },
];

const CONTACTS_DATA = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
    username: "test",
    description:
      "Народився 26 червня 1989 року в м.Київ. Маю досвід роботи з HTML та CSS.",
    correspondence: [
      {
        photo: require("../assets/images/contacts/client_avatar1.png"),
      },
      [
        { who: "me", message: "Some text from me" },
        { who: "other", message: "Some text from other" },
        { who: "other", message: "Some text from other 2" },
        { who: "me", message: "Some text from me" },
        { who: "me", message: "Some text from me" },
        { who: "me", message: "Some text from me" },
        { who: "other", message: "Some text from other 3" },
        { who: "other", message: "Some text from other 4" },
      ],
    ],
  },

  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
    username: "test1",
    description:
      "Народилась 19 листопада 1995 року в м.Хмельницьки. Займаюсь створенням веб-сайтів під ключ.. Орієнтуюсь в таких фреймворках як React, Angular",
    correspondence: [
      {
        photo: require("../assets/images/contacts/client_avatar2.png"),
      },
      [
        { who: "me", message: "Some text from me" },
        { who: "other", message: "Some text from other" },
        { who: "other", message: "Some text from other 2" },
        { who: "me", message: "Some text from me" },
        { who: "me", message: "Some text from me" },
        { who: "me", message: "Some text from me" },
        { who: "other", message: "Some text from other 3" },
        { who: "other", message: "Some text from other 4" },
      ],
    ],
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    username: "test2",
    description:
      "Full Stack developer. Для більш детальної інформації звертайтеся за номером телефону.",
    correspondence: [
      {
        photo: require("../assets/images/contacts/client_avatar1.png"),
      },
      [
        { who: "me", message: "Some text from me" },
        { who: "other", message: "Some text from other" },
        { who: "other", message: "Some text from other 2" },
        { who: "me", message: "Some text from me" },
        { who: "me", message: "Some text from me" },
        { who: "me", message: "Some text from me" },
        { who: "other", message: "Some text from other 3" },
        { who: "other", message: "Some text from other 4" },
      ],
    ],
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
    username: "test3",
    description:
      "Full Stack developer. Для більш детальної інформації звертайтеся за номером телефону.",
    correspondence: [
      {
        photo: require("../assets/images/contacts/client_avatar2.png"),
      },
      [
        { who: "me", message: "Some text from me" },
        { who: "other", message: "Some text from other" },
        { who: "other", message: "Some text from other 2" },
        { who: "me", message: "Some text from me" },
        { who: "me", message: "Some text from me" },
        { who: "me", message: "Some text from me" },
        { who: "other", message: "Some text from other 3" },
        { who: "other", message: "Some text from other 4" },
      ],
    ],
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
    username: "test4",
    description:
      "Народився 15 жовтня 1999 року. Маю досвід роботи з Vue, Bootstrap, JS, Wordpress.",
    correspondence: [
      {
        photo: require("../assets/images/contacts/client_avatar3.png"),
      },
      [
        { who: "me", message: "Some text from me" },
        { who: "other", message: "Some text from other" },
        { who: "other", message: "Some text from other 2" },
        { who: "me", message: "Some text from me" },
        { who: "me", message: "Some text from me" },
        { who: "me", message: "Some text from me" },
        { who: "other", message: "Some text from other 3" },
        { who: "other", message: "Some text from other 4" },
      ],
    ],
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
    username: "test5",
    description:
      "Народився 10 лютого 1940 року. Маю великий досвід життя. Люблю багато говорити і ділитись прожитим досвідом. Звертайтесь. ",
    correspondence: [
      {
        photo: require("../assets/images/contacts/client_avatar4.png"),
      },
      [
        { who: "me", message: "Some text from me" },
        { who: "other", message: "Some text from other" },
        { who: "other", message: "Some text from other 2" },
        { who: "me", message: "Some text from me" },
        { who: "me", message: "Some text from me" },
        { who: "me", message: "Some text from me" },
        { who: "other", message: "Some text from other 3" },
        { who: "other", message: "Some text from other 4" },
      ],
    ],
  },
  {
    firstName: "Віталік",
    lastName: "Джонсон",
    phone: "+380957318521",
    gender: "male",
    username: "test6",
    description:
      "Народився 8 січня 1990 року. Маю великий досвід життя. Люблю багато говорити і ділитись прожитим досвідом. Звертайтесь. ",
    correspondence: [
      {
        photo: require("../assets/images/contacts/client_avatar2.png"),
      },
      [
        { who: "me", message: "Some text from me" },
        { who: "other", message: "Some text from other" },
        { who: "other", message: "Some text from other 2" },
        { who: "me", message: "Some text from me" },
        { who: "me", message: "Some text from me" },
        { who: "me", message: "Some text from me" },
        { who: "other", message: "Some text from other 3" },
        { who: "other", message: "Some text from other 4" },
      ],
    ],
  },
  {
    firstName: "Олександра",
    lastName: "Джонсон",
    phone: "+380937314561",
    gender: "female",
    username: "test7",
    description:
      "Народилась 2 червня 1995 року. Маю деякий досвід у frontend розробці.",
    correspondence: [
      {
        photo: require("../assets/images/contacts/client_avatar3.png"),
      },
      [
        { who: "me", message: "Some text from me" },
        { who: "other", message: "Some text from other" },
        { who: "other", message: "Some text from other 2" },
        { who: "me", message: "Some text from me" },
        { who: "me", message: "Some text from me" },
        { who: "me", message: "Some text from me" },
        { who: "other", message: "Some text from other 3" },
        { who: "other", message: "Some text from other 4" },
      ],
    ],
  },
];

export async function getContactsData(searchTerm = "", gender = ALL_GENDERS) {
  const genderValue = [];
  if (gender & MALE) genderValue.push("male");
  if (gender & FEMALE) genderValue.push("female");
  if (gender & ANONYMOUS) genderValue.push(undefined);

  return CONTACTS_DATA.map((el) => ({ ...el })).filter((item) => {
    return (
      (item.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||
        item.lastName.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) >=
          0 ||
        item.phone.indexOf(searchTerm) >= 0) &&
      genderValue.includes(item.gender)
    );
  });
}

export async function getContactById(userName) {
  return CONTACTS_DATA.find((contact) => contact.username === userName);
}

export const IMAGES_DATA = [
  {
    title: "Пляж",
    name: require("../assets/images/gallery/pexels-asad-photo-maldives-457882.jpg"),
    likes: 10,
    comments: 1,
  },
  {
    title: "Нічне місто",
    name: require("../assets/images/gallery/pexels-ben-cheung-441379.jpg"),
    likes: 20,
    comments: 2,
  },
  {
    title: "Острів",
    name: require("../assets/images/gallery/pexels-bob-krustev-225203.jpg"),
    likes: 100,
    comments: 24,
  },
  {
    title: "Нічний міст",
    name: require("../assets/images/gallery/pexels-james-wheeler-414612.jpg"),
    likes: 300,
    comments: 20,
  },
  {
    title: "Гори",
    name: require("../assets/images/gallery/pexels-james-wheeler-417074.jpg"),
    likes: 50,
    comments: 105,
  },
  {
    title: "Водоспад",
    name: require("../assets/images/gallery/pexels-james-wheeler-1598073.jpg"),
    likes: 230,
    comments: 27,
  },
  {
    title: "Прірва та людина",
    name: require("../assets/images/gallery/pexels-m-venter-1659438.jpg"),
    likes: 677,
    comments: 290,
  },
  {
    title: "Поле квітів",
    name: require("../assets/images/gallery/pexels-pixabay-36478.jpg"),
    likes: 50,
    comments: 15,
  },
  {
    title: "Озеро",
    name: require("../assets/images/gallery/pexels-pixabay-50594.jpg"),
    likes: 10,
    comments: 1,
  },
  {
    title: "Дорога",
    name: require("../assets/images/gallery/pexels-pixabay-237018.jpg"),
    likes: 10,
    comments: 1,
  },
  {
    title: "Леопард",
    name: require("../assets/images/gallery/pexels-pixabay-267074.jpg"),
    likes: 10,
    comments: 1,
  },
  {
    title: "Дерево",
    name: require("../assets/images/gallery/pexels-pixabay-268533.jpg"),
    likes: 10,
    comments: 1,
  },
  {
    title: "Скала",
    name: require("../assets/images/gallery/pexels-pixabay-302549.jpg"),
    likes: 10,
    comments: 1,
  },
  {
    title: "Водоспад",
    name: require("../assets/images/gallery/pexels-pixabay-358457.jpg"),
    likes: 10,
    comments: 1,
  },
  {
    title: "Безкрайній океан",
    name: require("../assets/images/gallery/pexels-pixabay-533937.jpg"),
    likes: 10,
    comments: 1,
  },
];
