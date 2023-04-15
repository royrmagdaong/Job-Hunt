import styles from '@/styles/ViewJob.module.css'
import Image from 'next/image'

const ViewJob = (props) => {
    return (
        <div className={styles['container']}>
            <div className={styles['logo']}>
                <Image
                    src="/company-a.jpg"
                    alt="Company Logo"
                    width={80}
                    height={50}
                />
            </div>
            <div className={styles['job-title']}>{props.job['job-title']}</div>
            <div className={styles['company-name']}>Company Name</div>
            <div className={styles['location']}>Location</div>
            <div className={styles['salary']}>25,000.00</div>
            <ul>
                <li className={styles['job-highlights']}>highlight 1</li>
                <li className={styles['job-highlights']}>highlight 2</li>
                <li className={styles['job-highlights']}>highlight 3</li>
                <li className={styles['job-highlights']}>highlight 3</li>
                <li className={styles['job-highlights']}>highlight 3</li>
                <li className={styles['job-highlights']}>highlight 3</li>
            </ul>
            <div className={styles['job-description']}>
                <h4>Job Description</h4>
                <p>Turpis felis ac proin voluptate eligendi laboriosam blanditiis ultricies magna posuere dui dolore maxime dolorum! Sint commodi ex nisl lobortis non facilisis. Vulputate nesciunt! Accusamus aptent sapiente turpis dui per hac sequi minim vel error perspiciatis rem varius tempore aspernatur aliquam nihil? Tenetur provident? Donec risus! Officia aliqua rutrum placeat. Deleniti cupiditate per porro. Non odio volutpat tellus metus turpis, cubilia imperdiet aliquip proident, quidem natoque quas viverra exercitationem dapibus, blanditiis eget! Blanditiis consequuntur vitae sollicitudin animi dolorum posuere inventore nibh. Rerum tristique delectus, nemo leo deleniti blandit nulla rhoncus, ullamcorper sociis taciti animi ducimus euismod, eiusmod similique, ullam aut.</p>
            </div>
            <div className={styles['company-info']}>
                <h4>Who we are</h4>
                <p>Turpis felis ac proin voluptate eligendi laboriosam blanditiis ultricies magna posuere dui dolore maxime dolorum! Sint commodi ex nisl lobortis non facilisis. Vulputate nesciunt! Accusamus aptent sapiente turpis dui per hac sequi minim vel error perspiciatis rem varius tempore aspernatur aliquam nihil? Tenetur provident? Donec risus! Officia aliqua rutrum placeat. Deleniti cupiditate per porro. Non odio volutpat tellus metus turpis, cubilia imperdiet aliquip proident, quidem natoque quas viverra exercitationem dapibus, blanditiis eget! Blanditiis consequuntur vitae sollicitudin animi dolorum posuere inventore nibh. Rerum tristique delectus, nemo leo deleniti blandit nulla rhoncus, ullamcorper sociis taciti animi ducimus euismod, eiusmod similique, ullam aut.</p>
                <p>Turpis felis ac proin voluptate eligendi laboriosam blanditiis ultricies magna posuere dui dolore maxime dolorum! Sint commodi ex nisl lobortis non facilisis. Vulputate nesciunt! Accusamus aptent sapiente turpis dui per hac sequi minim vel error perspiciatis rem varius tempore aspernatur aliquam nihil? Tenetur provident? Donec risus! Officia aliqua rutrum placeat. Deleniti cupiditate per porro. Non odio volutpat tellus metus turpis, cubilia imperdiet aliquip proident, quidem natoque quas viverra exercitationem dapibus, blanditiis eget! Blanditiis consequuntur vitae sollicitudin animi dolorum posuere inventore nibh. Rerum tristique delectus, nemo leo deleniti blandit nulla rhoncus, ullamcorper sociis taciti animi ducimus euismod, eiusmod similique, ullam aut.</p>
            </div>
        </div>
    );
}
 
export default ViewJob;