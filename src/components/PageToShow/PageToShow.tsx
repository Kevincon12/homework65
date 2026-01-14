import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import type {Page} from "../../types";
import axiosApi from "../../axiosApi.ts";

const PageToShow = () => {
    const {pageName} = useParams();
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState<Page | null>(null);

    useEffect(() => {
        if (!pageName) return;

        const getPage = async () => {
            try {
                setLoading(true);

                const response = await axiosApi.get(`/pages/${pageName}.json`);
                const responseData = await response.data;
                setPage(responseData);
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false);
            }
        }
        getPage();
    }, [pageName]);


    return (
        <div>
            {loading && (
                <div className="text-center my-3">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Sending</span>
                    </div>
                </div>
            )}

            {page !== null ?
                <div className='container mt-2'>
                    <h1 className='card-title'>{page.title}</h1>
                    <p className='card-text mt-2'>{page.content}</p>
                </div> : <div>No information</div>
            }

        </div>
    );
};

export default PageToShow;