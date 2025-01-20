"use client";
import custom from './custom.module.css';
import other from './other.module.css';
import outside from '@/style/outside.module.css';



export default function Home() {
  return (
    <main>
      <h1 className={custom.main}>CSS Modules with Next js</h1>
      <h2 className={other.main}>Heading 2 in main page</h2>
      <h2 className={outside.main}>Outside CSS</h2>
    </main>
  ); 
}

