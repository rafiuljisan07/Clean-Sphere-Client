import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Container from '../container/Container';
import IssueCard from './IssueCard';
import Loading from './Loading';

const CatIssues = () => {
    const { name } = useParams();
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://clean-sphere-server.vercel.app/issues/category/${name}`)
            .then((res) => {
                setIssues(res.data)
                setLoading(false)
            })
            .catch(() => {

            })
    }, [name]);

    if (loading) return <Loading />

    return (
        <Container>
            <h1 className='text-2xl font-semibold mb-4'>{name}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    issues.map(issue => <IssueCard issue={issue} key={issue._id} />)
                }
            </div>
        </Container>
    );
};

export default CatIssues;