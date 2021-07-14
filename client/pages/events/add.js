import React from 'react'
import Layout from '@/components/layout';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { API_URL } from '@/config/index';
import styles from '@/styles/Form.module.css';
import { element } from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const add = () => {

    const [values, setValues] = useState({
        name: '',
        performers: '',
        venue: '',
        address: '',
        date: '',
        time: '',
        description: ''
    });

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const hasEmptyFields = Object.values(values).some((element) => element === '');
        if (hasEmptyFields) {
            toast.error('Please fill all fields');
        }
        const res = await fetch(`${API_URL}/events`, {
            method: 'POST',
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
        <Layout title='Add New Event'>
            <Link href="/events">Go Back</Link>
            <h1>Add Event</h1>
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
                        <input type="date" id="date" name="date" value={values.date}
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
                <input type="submit" value="Add Event" className="btn"></input>
            </form>
        </Layout >
    )
}

export default add
