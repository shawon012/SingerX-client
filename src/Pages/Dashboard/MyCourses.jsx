import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ClassItem from '../Home/PopularClass/ClassItem';
import ItemCard from '../Home/PopularClass/ItemCard';

const MyCourses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: insClass = [] } = useQuery({
        queryKey: ['insClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/insClass?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    console.log(insClass);
    return (
        <div >
            <div className='mx-auto'>
                <h3 className='text-center font-bold text-6xl font-mono mt-5'>My Class</h3>
            </div>
            <div className="my-9 grid md:grid-cols-2 gap-10">
                {
                    insClass.map(item => <ItemCard
                        key={item._id}
                        item={item}
                    ></ItemCard>)
                }
            </div>
        </div>
    );
};

export default MyCourses;