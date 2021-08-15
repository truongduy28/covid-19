const urlAPI = 'https://tuoitre.io/covid-mix';
// var covidToanQuoc;
const toanQuoc = document.querySelector('.dataContries');
const tinh = document.querySelector('.province');
const search = document.querySelector('#search');
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
                    console.log(element);
                    html += `
                    <div class="element">
                <div class="dataName">
                   ${element[1]}
                </div>
                <div class="data">
                    <div>
                        Tổng số ca
                        <br> ${element[2]}
                    </div>
                    <div>
                        Số ca nhiễm hôm nay
                        <br> ${element[3]}
                    </div>
                    <div>
                        Số vaccice đã tiêm
                        <br>${element[4]}
                    </div>
                    <div style="border-right:none ">
                        Số vaccine đã phân bổ
                        <br>${element[5]}
                    </div>
                   
                </div>
            </div>
                    `;
                    console.log(html);
                    tinh.innerHTML = html;
                }
            })
        })

});

// Toan quoc
fetch(urlAPI)
    .then(response => response.json())
    .then(data => data)
    .then(data => {
        var html = '';
        if (data) {
            console.log(data[0][1]); {
                // console.log(element);
                html = `
                <div class="data">
                        <p style="background-color: #fab1a0 ;"> Tổng Số Ca Trên Cả Nước </p>
                        <br><br><br><br><br><br>
                        <span>${data[0][0]}</span>
                    </div>
                    <div class="data">
                        <p style="background-color:#f6e58d ;"> Số Ca Nhiễm Hôm Nay </p>
                        <br><br><br><br><br><br>
                        <span>${data[0][1]}</span>
                    </div>
                    <div class="data">
                        <p style="background-color: #55efc4;"> Số Ca Nhiễm Hôm Qua </p>
                        <br><br><br><br><br><br>
                        <span>${data[0][2]}</span>
                    </div>
                    <div class="data">
                        <p style="background-color:#7ed6df ;"> Số Ca Chữa Khỏi </p>
                        <br><br><br><br><br><br>
                        <span>${data[0][3]}</span>
                    </div>
                    <div class="data">
                        <p style="background-color: #ff7979;"> Số ca tử vong </p>
                        <br><br><br><br><br><br>
                        <span>${data[0][4]}    </span>
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
                <div class="element">
                <div class="dataName">
                   ${element[1]}
                </div>
                <div class="data">
                    <div>
                        Tổng số ca
                        <br> ${element[2]}
                    </div>
                    <div>
                        Số ca nhiễm hôm nay
                        <br> ${element[3]}
                    </div>
                    <div>
                        Số vaccice đã tiêm
                        <br>${element[4]}
                    </div>
                    <div style="border-right:none ">
                        Số vaccine đã phân bổ
                        <br>${element[5]}
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
                search.innerHTML = html;
            }
        })
    })