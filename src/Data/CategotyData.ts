interface ISubset{
    id:string;
    name:string;
}

interface ICategoryData{
    id:string;
    name:string;
    children?:ISubset[]
}


// export const CategoryData:ICategoryData[] = [
//     {title:"خوار و بار",
//     subset:[
//         {subTitle:"نان"},
//         {subTitle:"برنج"},
//         {subTitle:"روغن"},
//         {subTitle:"قند و نبات"},
//     ]
//     },
//     {title:"لبنیات",
//     subset:[
//         {subTitle:"شیر"},
//         {subTitle:"ماست"},
//         {subTitle:"دوغ"},
//         {subTitle:"کره و خامه"},
//     ]
//     },
//     {title:"پروتئینی",
//     subset:[
//         {subTitle:"گوشت قرمز"},
//         {subTitle:"مرغ"},
//         {subTitle:"ماهی"},
//         {subTitle:"میگو"},
//     ]
//     },
//     {title:"نوشیدنی",
//     subset:[
//         {subTitle:"نوشیدنی گازدار"},
//         {subTitle:"قهوه"},
//         {subTitle:"چای"},
//         {subTitle:"آبمیوه"},
//     ]
//     },
// ]

export const CategoryData:ICategoryData[] = [
    {
      id: "خوار و بار",
      name: "خوار و بار",
      children: [
        {
          id: "نان",
          name: "نان",
        },
        {
          id: "برنج",
          name: "برنج",
        },
        {
          id: "روغن",
          name: "روغن",
        },
        {
          id: "قند و نبات",
          name: "قند و نبات",
        },
      ],
    },
    {
      id: "لبنیات",
      name: "لبنیات",
      children: [
        {
          id: "شیر",
          name: "شیر",
        },
        {
          id: "ماست",
          name: "ماست",
        },
        {
          id: "دوغ",
          name: "دوغ",
        },
        {
          id: "کره و خامه",
          name: "کره و خامه",
        },
      ],
    },
    {
      id: "نوشیدنی",
      name: "نوشیدنی",
      children: [
        {
          id: "نوشیدنی گازدار",
          name: "نوشیدنی گازدار",
        },
        {
          id: "قهوه",
          name: "قهوه",
        },
        {
          id: "چای",
          name: "چای",
        },
        {
          id: "آبمیوه",
          name: "آبمیوه",
        },
      ],
    },
    {
      id: "پروتئینی",
      name: "پروتئینی",
      children: [
        {
          id: "گوشت قرمز",
          name: "گوشت قرمز",
        },
        {
          id: "مرغ",
          name: "مرغ",
        },
        {
          id: "ماهی",
          name: "ماهی",
        },
        {
          id: "میگو",
          name: "میگو",
        },
      ],
    },
  ];