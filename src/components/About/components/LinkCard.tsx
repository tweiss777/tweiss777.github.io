interface IProps{
    link: string,
    name: string,
    img: string,
}


export default function LinkCard({link, name, img} : IProps){
        return (
           <div>
            <a href={link} target="_blank_">
                    <div>
                        <img src={img} alt={name} />
                       <h1>{name}</h1> 
                    </div>
            </a>
           </div>

        )
}
