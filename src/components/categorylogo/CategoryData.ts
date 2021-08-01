import meat from '../../assets/images/logo/meat.png'
import milk from '../../assets/images/logo/milk.png'
import coak from '../../assets/images/logo/cola.png'
import snack from '../../assets/images/logo/snack.png'

interface ICategory{
    src:any;
    alt:string;
    hover:string
}

export const category:ICategory[] = [
    {src:meat , alt:"meatPNG" , hover:"پروتئینی"},
    {src:milk , alt:"milkPNG" , hover:"لبنیات"},
    {src:coak , alt:"coakPNG" , hover:"نوشیدنی"},
    {src:snack , alt:"snackPNG" , hover:"خوار و بار"},
]