import styles from './Interesting.module.css'

import banner1 from "../assets/banner1.jpg";

export default function Interesting(){
    return(
        <section class="interesting" style="margin-top: 24px;">
            <h2>Интересное</h2>
            <div class="interesting-grid spacing">
                <div class="interesting-row three">
                <div class="interesting-item">
                    <img src="{% static 'core/images/banner5.jpg' %}" alt="Banner1"/>
                    <div class="title">Banner5</div>
                </div>
                <div class="interesting-item">
                    <img src="{% static 'core/images/banner6.jpg' %}" alt="banner6"/>
                    <div class="title">banner6</div>
                </div>
                <div class="interesting-item">
                    <img src="{% static 'core/images/banner7.jpg' %}" alt="banner7"/>
                    <div class="title">banner7</div>
                </div>
                </div>

                <div class="interesting-row three">
                <div class="interesting-item">
                    <img src="{% static 'core/images/banner8.jpg' %}" alt="banner8"/>
                    <div class="title">banner8</div>
                </div>
                <div class="interesting-item">
                    <img src="{% static 'core/images/banner9.jpg' %}" alt="banner9"/>
                    <div class="title">banner9</div>
                </div>
                <div class="interesting-item">
                    <img src="{% static 'core/images/banner10.jpg' %}" alt="banner10"/>
                    <div class="title">banner10</div>
                </div>
                </div>
            </div>
        </section>
    )
}