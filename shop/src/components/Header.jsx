export default function Header(props){
    return(

        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex alig-center">
                <img width={40} height={40} src="./../images/logo/cat.svg"/>
                <div>
                <h3 className="text-uppercase">Милый питомец</h3>
                <p className="opacity-5">Больше, чем друг</p>
                </div>
            </div>
            
                <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30">
                    <img width={18} height={18} src="./../images/box.svg"/>
                    <span>$ 500</span>
                </li>
                <li>
                    <img width={18} height={18} src="./../images/user.svg"/>
                </li>
                </ul>
      
        </header>
    )
}