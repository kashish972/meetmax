import React from 'react';
import './RightSidebar.css';

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <input
              type="text"
              className="post-input"
              placeholder="Search Friends!"
            />
      <div class="image-row">
  <img src="https://imgs.search.brave.com/eeX_MK9H_y_4cRt8sUkSNLOihplwdvapjYn0bP18AqA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idWZm/ZXIuY29tL2xpYnJh/cnkvY29udGVudC9p/bWFnZXMvMjAyMi8w/My9za2l0Y2gtLTct/LnBuZw" alt="Image 1" class="circle-image" />
  <img src="https://imgs.search.brave.com/cRYszw8g9nBHEepMylR1z5OE_WP1TZqIWlrhlqBHOIs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3Lzg4Lzg3LzU0/LzM2MF9GXzc4ODg3/NTQyMV9Ub0FaU2ZP/dnhvNm9ENWY5MkJ2/Q0UxYTJseGh1Z1N6/TS5qcGc" alt="Image 2" class="circle-image" />
  <img src="https://imgs.search.brave.com/U58TDlsVxPB2204-CjmEZ1A2HSRzoHM0RCaQNkHYKS4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzUwLzMyLzgy/LzI0MF9GXzI1MDMy/ODI1OF9mZFRsalZJ/QnowV0RWWE5WU3p5/Y01pU3hiUkFISE1j/bS5qcGc" alt="Image 3" class="circle-image" />
  <img src="https://imgs.search.brave.com/IDrRDVlJJZ8QFNpqPcNH6IwtcIzZfJ4JOlfZZtSlwyA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzM0LzU5LzU2/LzM2MF9GXzgzNDU5/NTYxOF9FczNYeWRp/R2V2SmY3anhWS1pN/QWFLMlF5d0trYXd4/Yi5qcGc" alt="Image 4" class="circle-image" />
  <img src="https://imgs.search.brave.com/Ta3jo15aoBIImdZRh8jTjyeDr63lGXe1DmHPbJvjIpc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzA3LzYwLzk2/LzM2MF9GXzgwNzYw/OTY0Nl94emlLQ3NU/cTZCakM0bkhvbHV4/d1lRaUVQQ0dGOHAw/US5qcGc" alt="Image 5" class="circle-image" />
</div>
<div className='text'>
<h4>Friends</h4>
<p>...</p>
</div>

<div class="image-list">
  <div class="image-row">
    <img src="https://imgs.search.brave.com/omarQhz265A9Vv5WxLIUKZdAfcxd6N2bv2xW5rjj4T4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzQ1LzI1LzQ3/LzM2MF9GXzg0NTI1/NDc3NF9manhxS2xx/TjJ0OEFybVk0Sjkx/Z0hhVVF6N1pnZjJC/MS5qcGc" alt="Image 1" class="circle-image" />
    <span class="image-name">Alexander</span>
  </div>
  <div class="image-row">
    <img src="https://imgs.search.brave.com/2bym_riJl3IjZliBaUrxC2W-pi1nWRVhd93dleWtrmk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/b29kLWh1bW9yZWQt/dGVlbmFnZS1ndXkt/b3JhbmdlLW91dGZp/dC1wb3NpbmctYmx1/ZS1iYWNrZ3JvdW5k/XzE5NzUzMS0yNjg2/Ny5qcGc_c2l6ZT02/MjYmZXh0PWpwZw" alt="Image 2" class="circle-image" />
    <span class="image-name">Lorem</span>
  </div>
  <div class="image-row">
    <img src="https://imgs.search.brave.com/HHqp0H51nRmTpTmMoyv1cchnINRZf5MTfu8ggzqY_rM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IxLzdh/L2U2L2IxN2FlNmFj/M2UyNjhiYWE1OTc4/MmM5MmFiNDhjNDk0/LmpwZw" alt="Image 3" class="circle-image" />
    <span class="image-name">Jiya</span>
  </div>
  <div class="image-row">
    <img src="https://imgs.search.brave.com/qkScc60OTCajiwzx-LEJKJcokhpJ8dCg-T567f5hkvI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/aWRkbGUtZWFzdGVy/bi1jb25maWRlbnQt/cGVyc29uLXBvc2lu/Zy1zdHVkaW8tY2Ft/ZXJhXzQ4MjI1Ny05/OTA5My5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" alt="Image 4" class="circle-image" />
    <span class="image-name">Rahul</span>
  </div>
  <div class="image-row">
    <img src="https://imgs.search.brave.com/IfI6UY9Aheqjau7BZGioOM05D8M1FdbX28wPpPRD2CU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tYW4tZ2xhc3Nl/cy1zd2VhdGVyLXN0/YW5kcy1mcm9udC1i/cmlnaHQtb3Jhbmdl/LWJhY2tncm91bmRf/MTI3NDI2OS0xNTA5/MjQuanBnP3NpemU9/NjI2JmV4dD1qcGc" alt="Image 5" class="circle-image" />
    <span class="image-name">Sohail</span>
  </div>
  <div class="image-row">
    <img src="https://imgs.search.brave.com/Zl5qKAydUbfteao7PCPTrWMf3Z-xWnCyxK6V29YZks4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4Lzg4LzEwLzQ4/LzM2MF9GXzg4ODEw/NDgwNl9CNEpSNFMx/Y2lYMmhZRUU5NVdN/d1d5S0xLZHdpSGNS/cC5qcGc" alt="Image 6" class="circle-image" />
    <span class="image-name">Vicky</span>
  </div>
  <div class="image-row">
    <img src="https://imgs.search.brave.com/Y3pO8-C92CX1StfQWkDj40a0Oxak3lfbywlZqG8l4dY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kNW51/bnlhZ2NpY2d5LmNs/b3VkZnJvbnQubmV0/L2V4dGVybmFsX2Fz/c2V0cy9oZXJvX2V4/YW1wbGVzL2hhaXJf/YmVhY2hfdjM5MTE4/MjY2My9vcmlnaW5h/bC5qcGVn" alt="Image 7" class="circle-image" />
    <span class="image-name">Ricky</span>
  </div>
  <div class="image-row">
    <img src="https://imgs.search.brave.com/vYrVrDPHzvdbaB559LAQXKfKumt1R3oIUL1PapQbho8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzkzLzYxLzkx/LzM2MF9GXzg5MzYx/OTE2Ml9rVXFsTVpw/SmhKTmhvWlFoM0lo/RFhodFlOTXhWdm90/Wi5qcGc" alt="Image 8" class="circle-image" />
    <span class="image-name">Raj</span>
  </div>
  <div class="image-row">
    <img src="https://imgs.search.brave.com/Os8WnPKiZHGzlxGaoPfgSv3XPtrJlXMe1iuPPDVHT4Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M4L2E2/LzE0L2M4YTYxNGIw/ZDM1OTY3NjFmODc4/ZTgwOTk3NWYzMWE1/LmpwZw" alt="Image 9" class="circle-image" />
    <span class="image-name">Kashish</span>
  </div>
  <div class="image-row">
    <img src="https://imgs.search.brave.com/L3F2nO_YZA39wmzXoV3l9xzi_ZkTdpDATWiE2kWvB6E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzY2LzkxLzMz/LzM2MF9GXzk2Njkx/MzMwNl9KZFRvR1hH/M29SaFhkN0N2V3Fo/RDY0QjZlYjlNV2RS/Ri5qcGc" alt="Image 10" class="circle-image" />
    <span class="image-name">Sanya</span>
  </div>
</div>

    </div>
  );
}

export default RightSidebar;