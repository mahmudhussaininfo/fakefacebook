
// Get Elements
const post_form = document.getElementById('post_add_form');
const msg = document.querySelector('.msg');
const all_posts = document.querySelector('.all-post');



const getAllPosts = () => {

    let posts = readlsdata('fb_post');
    let list = '';

    posts.reverse().map(data => {
        list += `

        <div class="post-timeline pt-3">
            <div class="card">
                <div class="card-body">
                    <div class="post-auth-area">
                    <div class="userr-info">
                        <img class="myimg" src="${data.aphoto}" alt="">
                        <div class="details">
                            <span>${data.aname}</span>
                            <span> 1h. <i class="bi bi-globe"></i></span>

                        </div>
                    </div>
                    <div class="button">
                        <span><i class="bi bi-three-dots"></i></span>
                    </div>

                </div>
                <div class="post-content">
                    <p>${data.pcontent}</p>
                    <img src="${data.pphoto}"
                        alt="">
                </div>

             </div>
            </div>
        </div>
     `;

    });


    all_posts.innerHTML = list;


}
getAllPosts();

post_form.onsubmit = (e) => {

    e.preventDefault();

    // form data get
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());
    const { aname, aphoto, pcontent, pphoto } = Object.fromEntries(form_data.entries());

    //validation

    if (!aname || !aphoto || !pcontent || !pphoto) {

        msg.innerHTML = setAlert("Data undifined");

    } else {
        msg.innerHTML = setAlert("data Stable", "green");
        createlsdata('fb_post', data);
        e.target.reset();
        getAllPosts();



    }

}
