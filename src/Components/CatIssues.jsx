import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Container from '../container/Container';
import IssueCard from './IssueCard';

const CatIssues = () => {
    const { name } = useParams();
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/issues/category/${name}`)
            .then((res) => {
                setIssues(res.data)
            })
            .catch(() => {

            })
    }, [name]);

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