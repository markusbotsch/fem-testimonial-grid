export default function Testimonial({ name, image, headline, copy }) {

    return(
        <div className="testimonial">
            <div className="personal-info">
                <img src={`../images/${image}`} alt={name}/>
                <div className="personal-info-data">
                    <h3 className="personal-info-name">{name}</h3>
                    <p className="opacity-50">Verfified Graduate</p>
                </div>
            </div>
            <h2>{headline}</h2>
            <p className="opacity-70">" {copy} "</p>
        </div>
    )
}