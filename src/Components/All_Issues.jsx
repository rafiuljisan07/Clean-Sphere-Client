import React, { useEffect, useState } from 'react';
import IssueCard from './IssueCard';
import Container from '../container/Container';
import axios from 'axios';
import Loading from './Loading';

const All_Issues = () => {
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://clean-sphere-server.vercel.app/issues')
            .then(res => {
                setIssues(res.data)
                setLoading(false)
            })
            .catch(() => {

            })
    }, [])



    if (loading) return <Loading />
    return (
        <div>
            <title>Clean Sphere | All Issues</title>
            <Container className='flex flex-col'>
                <h1 className='text-2xl font-semibold mb-4'>All Issues</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        issues.map(issue => <IssueCard issue={issue} key={issue._id} />)
                    }
                </div>
            </Container>
        </div>

    );
};

export default All_Issues;