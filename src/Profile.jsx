import './Profile.css'

export default function Profile() {
    return (
      <div class='profile'>
        <div class='profile-photo-container'>
            <img class='profile-photo' src='src/assets/shibe.jpg' width='150px' height='150px' />
            <button class='contact-btn'>Contact</button>
        </div>
        <div class='profile-text-container'>
            <div class='profile-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptates asperiores quod eius blanditiis ducimus, velit impedit fugit corrupti, voluptas odit maxime quibusdam! Quas asperiores reprehenderit, accusamus facilis, cupiditate voluptate quasi explicabo, autem quidem velit veniam ullam sunt minus suscipit eos delectus dicta ad necessitatibus porro saepe expedita excepturi possimus!
            </div>
        </div>
      </div>
    )
}