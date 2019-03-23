import React from 'react'

const Card = (props) => {
    const {article} = props
    return (
        <div className='tc bg-light-green dib ma2 br3 pa1 grow shadow-5 App'>

            <div>

                <a href={article.url}>
                    <img src={article.urlToImage} alt='Photo' height={"400px"} width={"400px"}/>
                    <h5>
                        {article.title}
                        {/*ABCD*/}
                    </h5>
                </a>
                {/*<p>*/}
                    {/*ABCDFFDSFJSDHFISDJFDSJSJDFJDSIFJIDSJFISDJFISDJ*/}
                {/*</p>*/}
            </div>
        </div>
    );
}

export default Card