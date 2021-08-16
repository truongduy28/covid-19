const urlAPI = 'https://tuoitre.io/covid-mix';
// var covidToanQuoc;
const toanQuoc = document.querySelector('.dataContries');
const tinh = document.querySelector('.province');
const search = document.querySelector('#search');
const pageload = document.querySelector('.pageload');
document.getElementById('search').addEventListener('change', function() {
    console.log('You selected: ', this.value);
    // 
    fetch(urlAPI)
        .then(response => response.json())
        .then(data => data)
        .then(data => {
            var html = '';
            data.filter((element, index) => {
                // console.log(element);
                if (index > 1 && element[0] === parseInt(this.value)) {
                    // console.log(element);
                    html += `
                    <div class="element" style="background: #f9f9f9">
                    <div style=" text-Align: center" class="dataName">
                       ${element[1]}
                    </div>
                    <div class="data">
                        <div style="background:#55efc4 " >
                            Tổng số ca
                            <br> <p>${element[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        </div>
                        <div style="background:#ffcccc ">
                            Số ca nhiễm hôm nay
                            <br> <p style="color:#b50000 " >+ ${element[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        </div>
                        <div style="background: #fffa65 ">
                            Số vaccice đã tiêm
                            <br><p>${element[4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        </div>
                        <div style="border-right:none; background: #7bed9f ">
                            Số vaccine đã phân bổ
                            <br><p>${element[5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        </div>
                       
                    </div>
                </div>
                    `;
                    // console.log(html);

                } else if (parseInt(this.value) == 0) {
                    html = `<p style="text-Align:center ">Chọn 1 tỉnh thành đi bạn ơi :3</p>`;
                }
                tinh.innerHTML = html;
            })
        })

});
// Toan quoc

// Toan quoc
fetch(urlAPI)
    .then(response => response.json())
    .then(data => data)
    .then(data => {
        var html = '';
        if (data) {
            {
                // console.log(element);
                html = `
             
                <div class="data">
                        <p style="background-color: #fab1a0 ;"> Tổng Số Ca Trên Cả Nước </p>
                        <br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden">
                        <span>${data[0][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</span>
                    </div>
                    <div class="data">
                    <p style="background-color:#7ed6df ;"> Số Ca Chữa Khỏi </p>
                    <br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden">                    <span>${data[0][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>
                    <div class="data">
                        <p style="background-color:#f6e58d ;"> Số Ca Nhiễm Hôm Nay </p>
                        <br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden">                        <span>Chưa xác định</span>
                    </div>
                    <div class="data">
                        <p style="background-color: #55efc4;"> Số Ca Nhiễm Hôm Qua </p>
                        <br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden">                        <span>Chưa xác định</span>
                    </div>
                  
                    <div class="data">
                        <p style="background-color: #ff7979;">Số vaccine đã tiêm </p>
                        <br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden"><br class="mobile-hidden">                        <span>  ${data[1][5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </span>
                    </div>
                    `;

            };
        }
        toanQuoc.innerHTML = html;
    })

fetch(urlAPI)
    .then(response => response.json())
    .then(data => data)
    .then(data => {
        var html = '';
        data.map((element, index) => {
            if (index > 1) {
                html += `
                <div class="element" style="background: #f9f9f9">
                <div style=" text-Align: center" class="dataName">
                   ${element[1]}
                </div>
                <div class="data">
                    <div style="background:#55efc4 " >
                        Tổng số ca
                        <br> <p>${element[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    </div>
                    <div style="background:#ffcccc ">
                        Số ca nhiễm hôm nay
                        <br> <p style="color:#b50000 " >+ ${element[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    </div>
                    <div style="background: #fffa65 ">
                        Số vaccice đã tiêm
                        <br><p>${element[4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    </div>
                    <div style="border-right:none; background: #7bed9f ">
                        Số vaccine đã phân bổ
                        <br><p>${element[5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    </div>
                   
                </div>
            </div>
                `;
                tinh.innerHTML = html;
            }
        })
    })

fetch(urlAPI)
    .then(response => response.json())
    .then(data => data)
    .then(data => {
        var html = '';
        data.map((element, index) => {
            if (index > 1) {
                html += `
                <option value="${element[0]}">${element[1]}</option>
                `;
                search.innerHTML = `   <option value="0">Chọn tỉnh thành của bạn...</option>` + html;
            }
        })
    })

function reload() {
    location.reload()
}
window.addEventListener('load', function() {
    pageload.style.opacity = '0';
    setTimeout(function() {
        pageload.parentElement.removeChild(pageload);
    }, 2000);
})