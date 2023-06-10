
const InsItem = ({ item }) => {
    const { Image, Name, Email, NumberOfClasses, ClassesTaken } = item;
    
    return (
       
            <div className='mx-auto'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={Image} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{Name}</h2>
                        <p>Email: {Email}</p>
                        <p>Number of Classes: {NumberOfClasses}</p>
                        <p>Class Taken: {ClassesTaken}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Show More</button>
                        </div>
                    </div>
                </div>
            </div>
     

    );
};

export default InsItem;