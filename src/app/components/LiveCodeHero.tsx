import React from 'react'
import './LiveCodeHero.scss'

const LiveCodeHero: React.FC = () => {
    return (
        <div className="box-wrapper">
            <pre>
                <code className="javascript">
                    <span className="cn ci0"> <span className="cc-green">name</span> <span className="cc-dark">:</span> Healthcare application</span> <br />
                    <span className=""> <span className="cc-green">entities</span> <span className="cc-dark">:</span></span> <br />
                    <span className="ci1">👩🏾‍⚕️  <span className="cc-green">Doctor</span> <span className="cc-dark">:</span></span> <br />
                        <span className="ci2"> <span className="cc-green">properties</span> <span className="cc-dark">:</span></span> <br />
                            <span className="ci3"><span className='cc-dark'>-</span> fullName</span> <br />
                            <span className="ci3"><span className='cc-dark'>-</span> avatar</span> <br />
                            <span className="ci3"><span className='cc-dark'>-</span> <span className="cc-sand">{`{`}</span>  <span className="cc-green">name</span> <span className="cc-dark">:</span> price,  <span className="cc-green">type</span> <span className="cc-dark">:</span> money,  <span className="cc-green">options</span> <span className="cc-dark">:</span> <span className="cc-sand">{`{`}</span>  <span className="cc-green">currency</span> <span className="cc-dark">:</span> EUR <span className="cc-sand">{`}`}</span> <span className="cc-sand">{`}`}</span></span> <br />
                        <span className="ci2"> <span className="cc-green">belongsTo</span> <span className="cc-dark">:</span></span> <br />
                            <span className="ci3"><span className='cc-dark'>-</span> City</span> <br />
                        <br />
                    <span className="ci1">🤒  <span className="cc-green">Patient</span> <span className="cc-dark">:</span></span> <br />
                        <span className="ci2"> <span className="cc-green">properties</span> <span className="cc-dark">:</span></span> <br />
                        <span className="ci3"><span className='cc-dark'>-</span> fullName</span> <br />
                        <span className="ci3"><span className='cc-dark'>-</span> <span className="cc-sand">{`{`}</span>  <span className="cc-green">name</span> <span className="cc-dark">:</span> birthdate,  <span className="cc-green">type</span> <span className="cc-dark">:</span> date <span className="cc-sand">{`}`}</span></span> <br />
                        <span className="ci2"> <span className="cc-green">belongsTo</span> <span className="cc-dark">:</span></span> <br />
                        <span className="ci3"><span className='cc-dark'>-</span> Doctor</span> <br />
                        <br />
                    <span className="ci1">🌍 <span className="cc-green">City</span> <span className="cc-dark">:</span></span> <br />
                        <span className="ci2"> <span className="cc-green">properties</span> <span className="cc-dark">:</span></span> <br />
                        <span className="ci2"><span className='cc-dark'>-</span> name</span> <br />
                </code>
            </pre>
        </div>
    )
}

export default LiveCodeHero
