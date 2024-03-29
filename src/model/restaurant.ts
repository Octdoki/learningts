import { type } from 'os';
// 
// let data ={
//     name : '도돌식당',
//     restaurant : 'Chinese',
//     addres : {
//       city : 'Incheon',
//       detail : 'songdo',
//       zipcode : '123456'
//     },
//     menu : [{name : 'zzajang', price : '2500', category : 'noodle'}, {name : 'zzamBbong', category : 'noodle', price :'4500'}, {name : 'friedR', price : '5000', category : 'rice'}]
  
//   }

export type Restaurant = {
    name : string;
    category : string;
    address : Address
    menu :Menu[]

}
export type   Address={
    city : string;
    detail : string ;
    zipcode : number
    // zipcode? : number 있을수도이쏙 없을수도있고...?

};
export type Menu = {
    name : string;
    price : number;
    category : string
}
//Address 라는 타입을 또 만들어줄 수 있음

export type AddrwithoutZipcode = Omit <Address, 'zipcode'> //위에 Address 타입에서 zipcode 빼주세요

export type OnlyCategory = Pick<Restaurant, 'category'> // Restaurant 타입에서 카테고리만 가져와주세요

export type ApiResponse<T>={
    data : T[],
    totalPage : number,
    page: number
}

export type RestaurantResponse = ApiResponse<Restaurant>
export type MenuResponse = ApiResponse<Menu> // 호출한 api에 Menu 타입 설정..?
