import { useQuery } from '@tanstack/react-query';


const UseIns = () => {
    const {data: instructors = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() => {
            const res = await fetch(' https://fproserver.vercel.app/instructors');
            return res.json();
        }
    })

    return [instructors, loading, refetch]

};

export default UseIns;