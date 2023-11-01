import React from 'react'
import './Events.css'
export default function AboutUs(){
    return(
      <div class="container">
        <h1>Events</h1>
          <div class="carousel">
              <input type="radio" name="slides" id="slide-1" />
              <input type="radio" name="slides" id="slide-2" />
              <input type="radio" name="slides" id="slide-3" />
              <input type="radio" name="slides" id="slide-4" />
              <input type="radio" name="slides" id="slide-5" />
              <input type="radio" name="slides" id="slide-6" />
              <ul class="carousel__slides">
                  <li class="carousel__slide">
                      <figure>
                          <div>
                              <img src="https://picsum.photos/id/1041/800/450" alt="" />
                          </div>
                          {/* <figcaption>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              <span class="credit">Photo: Tim Marshall</span>
                          </figcaption> */}
                      </figure>
                  </li>
                  <li class="carousel__slide">
                      <figure>
                          <div>
                              <img src="https://picsum.photos/id/1043/800/450" alt="" />
                          </div>
                          {/* <figcaption>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              <span class="credit">Photo: Christian Joudrey</span>                            
                          </figcaption> */}
                      </figure>
                  </li>
                  <li class="carousel__slide">
                      <figure>
                          <div>
                              <img src="https://picsum.photos/id/1044/800/450" alt="" />
                          </div>
                          {/* <figcaption>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              <span class="credit">Photo: Steve Carter</span>                            
                          </figcaption> */}
                      </figure>
                  </li>
                  <li class="carousel__slide">
                      <figure>
                          <div>
                              <img src="https://picsum.photos/id/1045/800/450" alt="" />
                          </div>
                          {/* <figcaption>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              <span class="credit">Photo: Aleksandra Boguslawska</span>                            
                          </figcaption> */}
                      </figure>
                  </li>
                  <li class="carousel__slide">
                      <figure>
                          <div>
                              <img src="https://picsum.photos/id/1049/800/450" alt="" />
                          </div>
                          {/* <figcaption>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              <span class="credit">Photo: Rosan Harmens</span>                            
                          </figcaption> */}
                      </figure>
                  </li>
                  <li class="carousel__slide">
                      <figure>
                          <div>
                              <img src="https://picsum.photos/id/1052/800/450" alt="" />
                          </div>
                          {/* <figcaption>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              <span class="credit">Photo: Annie Spratt</span>                            
                          </figcaption> */}
                      </figure>
                  </li>
              </ul>    
              <ul class="carousel__thumbnails">
                  <li>
                      <label for="slide-1"><img src="https://picsum.photos/id/1041/150/150" alt="" /></label>
                  </li>
                  <li>
                      <label for="slide-2"><img src="https://picsum.photos/id/1043/150/150" alt="" /></label>
                  </li>
                  <li>
                      <label for="slide-3"><img src="https://picsum.photos/id/1044/150/150" alt="" /></label>
                  </li>
                  <li>
                      <label for="slide-4"><img src="https://picsum.photos/id/1045/150/150" alt="" /></label>
                  </li>
                  <li>
                      <label for="slide-5"><img src="https://picsum.photos/id/1049/150/150" alt="" /></label>
                  </li>
                  <li>
                      <label for="slide-6"><img src="https://picsum.photos/id/1052/150/150" alt="" /></label>
                  </li>
              </ul>
          </div>
      </div>
      );
};