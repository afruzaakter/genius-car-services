import React from 'react';
import experts1 from '../../../images/export/expert-1.jpg';
import experts2 from '../../../images/export/expert-2.jpg';
import experts3 from '../../../images/export/expert-3.jpg';
import experts4 from '../../../images/export/expert-4.jpg';
import experts5 from '../../../images/export/expert-5.jpg';
import experts6 from '../../../images/export/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    {id: 1, name: 'Will Smith', img: experts1},
    {id: 2, name: 'Chris Rock', img: experts2},
    {id: 3, name: 'Dwayne Rock', img: experts3},
    {id: 4, name: 'Messy', img: experts4},
    {id: 5, name: 'Will Smith', img: experts5},
    {id: 6, name: 'Stachy Jhonson', img: experts6},
]
const Experts = () => {
    return (
        <div id="experts" className='container g-5 '>
            <h2 className='text-center text-primary mt-5 mb-5'>our Experts</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
                {
                  experts.map(expert => <Expert key ={expert.id} expert={expert} ></Expert>)  
                }
            </div>
        </div>
    );
};

export default Experts;