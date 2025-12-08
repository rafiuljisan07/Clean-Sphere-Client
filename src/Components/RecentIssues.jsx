import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IssueCard from './IssueCard';
import Container from '../container/Container';
import Loading from './Loading';

const RecentIssues = () => {
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://clean-sphere-server.vercel.app/issues/features')
            .then(res => {
                setIssues(res.data)
                setLoading(false)
            })
            .catch(() => {

            })
    }, []);

    if (loading) return <Loading />

    console.log(issues);

    return (
        <Container className='flex flex-col'>
            <h1 className='text-2xl font-semibold mb-4'>Recent Issues</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    issues.map(issue => <IssueCard issue={issue} key={issue._id} />)
                }
            </div>
        </Container>
    );
};

export default RecentIssues;