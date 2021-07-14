import { PER_PAGE } from '@/config/index';
import Link from 'next/link';
const Pagination = ({ page, total }) => {
    const lastPage = Math.ceil(total / PER_PAGE);
    return (
        <div>
            {page > 1 && (<Link href={`/?page=${page - 1}`}><a className="btn-dash-secondary">Prev</a></Link>)
            }
            {page < lastPage && (<Link href={`/?page=${page + 1}`}><a className="btn-secondary">Next</a></Link>)
            }
        </div>
    )
}

export default Pagination
