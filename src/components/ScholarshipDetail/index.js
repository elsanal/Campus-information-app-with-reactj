import React from 'react'
import './style.css'
// import ScholarshipCard from '../ScholarshipCard'
import SideBar from '../SideBar'
import { useTranslation } from 'react-i18next';

function ScholarshipDetail(){
    const { t, i18n } = useTranslation();

    return (
        <div className="detail_container">
           <div className="main_content">
           <div className="detail_header">
                <div className="title">Bourse du gouvernment chinois 2021 - 2022</div>
                <div className="name">{t('detail.scholar_name')} : <p>Bourse du gouvernment chinois 2021 - 2022</p></div>
                <div className="country">{t('detail.country')} : <p>China</p></div>
                <div className="year">{t('detail.year')} : <p>2021 - 2022</p></div>
                <div className="duration">{t('detail.duration')} : <p>4 years</p> </div>
                <div className="level">{t('detail.level')}: <p> Master and PhD</p> </div>
                <div className="amount">{t('detail.amount')} : <p>3500 yuan / month</p></div>
                <div className="eligible">{t('detail.eligible')} : <p>All countries</p></div>
           </div>
           <div className="detail_body">
                <div className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maxime quidem laboriosam sit vel omnis, perferendis minus repellat aut atque soluta mollitia exercitationem corporis. Fugit veritatis molestiae dolor impedit! Sed!</div>
                <div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia tempore temporibus hic nemo exercitationem labore distinctio soluta blanditiis, enim consequuntur alias reprehenderit cumque quis ullam, aut vel optio cupiditate sint!</div>
                <div className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, veniam voluptas? Dolorum nisi eaque ipsam et reiciendis corrupti voluptatem harum, autem nostrum, dignissimos, nihil praesentium? Inventore laboriosam architecto deserunt neque eligendi labore ab pariatur odit autem id! Commodi, reprehenderit natus.</div>
           </div>
           <div className="detail_conclusion">
                <div className="detail_title2">{t('detail.advantage')} : </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim obcaecati odit veniam totam maxime consectetur culpa quibusdam fugit, expedita sapiente! Ea vel voluptatibus obcaecati ut in soluta, eaque, vero, corporis impedit ad corrupti architecto ex. Sunt omnis quisquam laudantium atque aspernatur iste, necessitatibus beatae consequuntur blanditiis voluptatum nihil facilis consequatur, id laborum? Consequatur perferendis obcaecati consequuntur eum a labore eos consectetur necessitatibus dolorem placeat esse earum sint magnam cupiditate laborum, at laudantium voluptates architecto aliquam provident dignissimos repudiandae tempora totam itaque! Facere perferendis nam rerum tenetur quos! Magni necessitatibus tempore dolores earum deserunt consequuntur? Sequi pariatur obcaecati odit earum unde!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quisquam, ea sequi consequuntur rerum repellat mollitia, dolor odit suscipit a amet repellendus ex reiciendis tenetur voluptates. Nesciunt magni dolor sapiente?</p>
                <div className="detail_title2">{t('detail.condition')} : </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, quisquam, iure accusamus enim libero distinctio cum nulla accusantium debitis, totam sed voluptas quaerat excepturi adipisci placeat quasi commodi amet fugiat.</p>
                <div className="detail_title2">{t('detail.required_doc')} : </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus voluptate, labore repudiandae animi a officiis nulla ipsam exercitationem debitis autem officia qui molestiae, deleniti rerum corporis consequuntur, accusantium vel!</p>
                <div className="detail_title2">{t('detail.how_apply')} : </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quidem! Et rerum enim vel veritatis eveniet officia, tenetur id quos saepe reprehenderit aliquam repudiandae soluta est ipsa esse mollitia minima.</p>
                <div className="detail_title2">{t('detail.other')} : </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere aspernatur asperiores quia consectetur. Non, quam optio eos eveniet, laborum rerum quas voluptate dicta natus reprehenderit id voluptas debitis nam cupiditate.</p>
           </div>
           <div className="detail_suggestion">
               <p className="detail_title2">{t('detail.similar_scholar')}</p>
               <div className="suggested">
                    {/* <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article>
                    <article><ScholarshipCard/></article> */}
               </div>
           </div>
           <div className="detail_comment">
               <p className="detail_title2">{t('detail.comment')}</p>
               <input type="text" placeholder={t('detail.enter_name')} className="input" required/>
               <input type="email" placeholder={t('detail.enter_email')} className="input" required/>
               <textarea name="comment" id="" className="comment" placeholder={t('detail.enter_message')} required></textarea>
               <button type="submit" className="button">{t('detail.submit')}</button>
           </div>
           </div>
           <div className="sidebar">
                 <SideBar/>
           </div>
        </div>
    )
}

export default ScholarshipDetail
