import {useState} from 'react';
import axiosApi from "../../axiosApi.ts";
import type {Page} from "../../types";
import {useNavigate} from "react-router-dom";


const AdminPageEdit = () => {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<string>('about');
    const navigate = useNavigate();


    const selectChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const keyPage = e.target.value;
        setCurrentPage(keyPage);

        try {
            setLoading(true);

            const response = await axiosApi.get(`/pages/${keyPage}.json`);
            const data: Page = response.data;

            setTitle(data.title);
            setContent(data.content);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    const makeChangesForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true);

            await axiosApi.put(`/pages/${currentPage}.json`, {title: title, content: content,});
            navigate(`/pages/${currentPage}`);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='container mt-2'>
            <h1 className='card-title mb-2'>Admin page</h1>

            <select value={currentPage} onChange={selectChange}>
                <option value="about">About</option>
                <option value="contacts">Contacts</option>
                <option value="history">History</option>
                <option value="products">Products</option>
                <option value="process">Process</option>
            </select>

            {loading && (
                <div className="text-center my-3">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Sending</span>
                    </div>
                </div>
            )}

            <form className='mt-2' onSubmit={makeChangesForm}>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="form-control mb-2"
                    placeholder="Title"
                />

                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    className="form-control mb-2"
                    rows={5}
                    placeholder="Content"
                />

                <button
                    type="submit"
                    className="btn btn-primary"
                >Save
                </button>
            </form>
        </div>
    );
};

export default AdminPageEdit;