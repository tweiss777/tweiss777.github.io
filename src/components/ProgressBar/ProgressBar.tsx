import '../../scss/ProgressBar.scss';
interface IProps{
    complete: number    
}
export default function ProgressBr({ complete } : IProps){
    return (
        <div className='progress-bar-container'>
               <div style={{width: `${complete}%`}} className="progress"></div> 
        </div>

    )
}
