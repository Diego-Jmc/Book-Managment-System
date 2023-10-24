import './commentBox.css'

export default function Comment(){
    return (
        <div className="comment">
            <div className='user-comment-info'>
                <p>Raul Gonzales</p>
                <p>2/2/2023</p>
            </div>

            <div>
                <p>"La prosa exquisita del autor te transporta a un mundo de maravilla y asombro. Cada página es una invitación a explorar los rincones más profundos de la condición humana, y te sumerge en una travesía emocional que es imposible de olvidar. 
                    Este libro es un viaje inolvidable que te dejará reflexionando mucho
                     después de haberlo terminado."</p>
            </div>
            
            <div>
                <p>Rating:5</p>
            </div>

        </div>

    )
}