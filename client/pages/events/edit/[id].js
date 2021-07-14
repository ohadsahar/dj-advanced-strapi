import Layout from '@/components/layout';
import { API_URL } from '@/config/index';
import styles from '@/styles/Form.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import Image from 'next/image';
import { FaImage } from 'react-icons/fa';
import { AppModal } from '@/components/AppModal'

const EditEventPage = ({ evt }) => {

    const [values, setValues] = useState({
        name: evt.name,
        performers: evt.performers,
        venue: evt.venue,
        address: evt.address,
        date: evt.date,
        time: evt.time,
        description: evt.description
    });

    const [imagePreview, setImagePreview] = useState(evt.image ? evt.image.formats.thumbnail.url : null);
    const [showModal, setShowModal] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const hasEmptyFields = Object.values(values).some((element) => element === '');
        if (hasEmptyFields) {

            toast.error('Please fill all fields');
        }
        const res = await fetch(`${API_URL}/events/${evt.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        if (res.ok) {
            toast.success('Event added successfully')
            const evt = await res.json();
            router.push(`/events/${evt.slug}`)

        } else {
            toast.error('Something went wrong');
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });

    }

    return (
        <Layout title='Edit Event'>
            <Link href="/events">Go Back</Link>
            <h1>Edit Event</h1>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div className={styles.grid}>
                    <div>
                        <label htmlFor="name">Event name</label>
                        <input type="text" id="name" name="name" value={values.name}
                            onChange={handleInputChange}></input>
                    </div>
                    <div>
                        <label htmlFor="performers">Performers</label>
                        <input type="text" id="performers" name="performers" value={values.performers}
                            onChange={handleInputChange}></input>
                    </div>
                    <div>
                        <label htmlFor="venue">Venue</label>
                        <input type="text" id="venue" name="venue" value={values.venue}
                            onChange={handleInputChange}></input>
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" value={values.address}
                            onChange={handleInputChange}></input>
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" value={moment(values.date).format('yyyy-MM-DD')}
                            onChange={handleInputChange}></input>
                    </div>
                    <div>
                        <label htmlFor="time">Time</label>
                        <input type="text" id="time" name="time" value={values.time}
                            onChange={handleInputChange}></input>
                    </div>


                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea type="text" id="description" name="description" value={values.description}
                        onChange={handleInputChange}></textarea>
                </div>
                <input type="submit" value="Update Event" className="btn"></input>
            </form>
            <h2>Event Image</h2>
            {imagePreview ?
                (
                    <Image src={imagePreview} width={170} height={100} />
                ) : <div>
                    <p>No image uploaded</p>
                </div>
            }
            <div>
                <button onClick={() => setShowModal(true)} className="btn-secondary"><FaImage />Set Image</button>

            </div>
            {/* <AppModal show={showModal} onClose={() => setShowModal(false)}>Image Upload</AppModal> */}
        </Layout >
    )
}

export default EditEventPage;


export async function getServerSideProps({ params: { id }, req }) {
    console.log(req.headers.cookie);
    const res = await fetch(`${API_URL}/events/${id}`);
    const evt = await res.json();

    return {
        props: {
            evt
        }
    }

}

