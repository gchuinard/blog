import React, {useEffect} from 'react';
import styled from 'styled-components';
import './HomeComponent.css';

function HomeComponent() {
        useEffect(() => {
        const classes = [
            { name: '.falaise', speed: 0.010 },
            { name: '.cailloux', speed: 0.015 },
            { name: '.foret-violet', speed: 0.020 },
            { name: '.foret', speed: 0.020 },
            { name: '.nuage-8', speed: 0.050 },
            { name: '.nuage-7', speed: 0.050 },
            { name: '.nuage-6', speed: 0.045 },
            { name: '.nuage-5', speed: 0.040 },
            { name: '.nuage-4', speed: 0.035 },
            { name: '.nuage-3', speed: 0.030 },
            { name: '.nuage-2', speed: 0.025 },
            { name: '.nuage-1', speed: 0.020 },
            { name: '.plaine', speed: 0.030 },
            { name: '.montagne', speed: 0.035 },
            { name: '.montagne-gauche', speed: 0.040 },
            { name: '.montagne-gauche-violet', speed: 0.045 },
            { name: '.soleil', speed: 0.050 },
        ];

        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            classes.forEach((classItem) => {
                const element = document.querySelector(classItem.name) as HTMLElement;
                if (element) {
                    element.style.transform = `translate3d(0%, ${scrollTop * classItem.speed}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
                }
            });
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <div className={'paralaxe-wrapper'}>
            <img className={'para-11'} src={'/assets/arbre.png'} alt={'Arbre'}/>
            <img className={'falaise para-10'} src={'/assets/falaise.png'} alt={'Falaise'}/>
            <img className={'cailloux para-9'} src={'/assets/cailloux.png'} alt={'Cailloux'}/>
            <img className={'foret-violet para-8'} src={'/assets/foretviolet.png'} alt={'Foret violete'}/>
            <img className={'foret para-7'} src={'/assets/foret.png'} alt={'Foret'}/>
            <img className={'nuage-gros nuage-8'} src={'/assets/nuage8.png'} alt={'Nuage'}/>
            <img className={'nuage-7'} src={'/assets/nuage7.png'} alt={'Nuage'}/>
            <img className={'nuage-gros nuage-6'} src={'/assets/nuage6.png'} alt={'Nuage'}/>
            <img className={'nuage-5'} src={'/assets/nuage5.png'} alt={'Nuage'}/>
            <img className={'nuage-4'} src={'/assets/nuage4.png'} alt={'Nuage'}/>
            <img className={'nuage-3'} src={'/assets/nuage3.png'} alt={'Nuage'}/>
            <img className={'nuage-2'} src={'/assets/nuage2.png'} alt={'Nuage'}/>
            <img className={'nuage nuage-1'} src={'/assets/nuage1.png'} alt={'Nuage'}/>
            <img className={'plaine para-6'} src={'/assets/plaine.png'} alt={'Plaine'}/>
            <img className={'montagne para-5'} src={'/assets/montagne.png'} alt={'Montagne'}/>
            <img className={'montagne-gauche para-4'} src={'/assets/montagnegauche.png'} alt={'Montagne'}/>
            <img className={'montagne-gauche-violet para-3'} src={'/assets/montagnegaucheviolet.png'} alt={'Montagne'}/>
            <img className={'soleil para-2'} src={'/assets/soleil.png'} alt={'Soleil'}/>
            <img className={'fond para-1'} src={'/assets/fond.png'} alt={'Fond'}/>
        </div>
    );
}

export default HomeComponent;
