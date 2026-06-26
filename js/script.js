// Customer data objects
// (I'm sort of simulating a JSON file or pulling from a REST service)
const user1 = {
    first: "Alex",
    last: "Smith",
    acct_num: 4372846375,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "open",
    rate: 70.0,
    balance: -270.00,
    deposit: 100.00
};
const user2 = {
    first: "Amadeus",
    last: "Mozart",
    acct_num: 47382756373,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "paid",
    rate: 70.0,
    balance: 270.00,
    deposit: 100.00
};
const user3 = {
    first: "John",
    last: "Krauz",
    acct_num: 98756474838,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "open",
    rate: 70.0,
    balance: -20.00,
    deposit: 100.00
};
const user4 = {
    first: "Olivia",
    last: "Bennet",
    acct_num: 12343265546,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "inactive",
    rate: 70.0,
    balance: 600.00,
    deposit: 100.00
};
const user5 = {
    first: "Ethan",
    last: "Parker",
    acct_num: "09803458763", // starts with 0
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "open",
    rate: 70.0,
    balance: -350.00,
    deposit: 100.00
};
const user6 = {
    first: "Liam",
    last: "Foster",
    acct_num: 23456732342,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "paid",
    rate: 70.0,
    balance: -270.00,
    deposit: 100.00
};
const user7 = {
    first: "Ava",
    last: "Mitchell",
    acct_num: 1234253647,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "due",
    rate: 70.0,
    balance: 30.00,
    deposit: 100.00
};
const user8 = {
    first: "Noah",
    last: "Reynolds",
    acct_num: 8674563654,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "open",
    rate: 70.0,
    balance: -270.00,
    deposit: 100.00
};
const user9 = {
    first: "Mason",
    last: "Carter",
    acct_num: 5678345645,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "inactive",
    rate: 70.0,
    balance: 460.00,
    deposit: 100.00
};
const user10 = {
    first: "Charlotte",
    last: "Brooks",
    acct_num: 2345436789,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "due",
    rate: 70.0,
    balance: 0.00,
    deposit: 100.00
};
const customers = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];

let count = 1; // number of customers
for (let i = 0; i < customers.length; i++){
    //console.log(customers[i]);
    const table_body = document.getElementById("table-body");
    const values = Object.values(customers[i]);
    //console.log(values);
    let row_html_part1 = '<tr scope="row" class="table-row">' +
    '<td class="small-col">' +
    // custom css checkbox; create unique id's using count
    '<div class="checkbox-wrapper-4">' +
        '<input class="inp-cbx" id="morning'+ count +'" type="checkbox"/>' +
        '<label class="cbx" for="morning'+ count +'">' +
            '<span><svg width="12px" height="10px"><use xlink:href="#check-4"></use></svg></span>' +
            // '<span></span>' +
        '</label>' +
        '<svg class="inline-svg">' +
            '<symbol id="check-4" viewbox="0 0 12 10">' +
            '<polyline points="1.5 6 4.5 9 10.5 1"></polyline>' +
            '</symbol>' +
        '</svg>' +
    '</div>' +
    // end custom checkbox stuff
    '</td>' +
    '<td>' + count + '</td>'+
    '<td><button class="btn-edit" onclick="show_panel()"><span class="icon-edit"></span></button></td>' +
    '<td><p class="name">' + values[0] + values[1] + '</p><p class="acct_num">'+ values[2] +'</p></td>' +
    '<td><p>'+ values[3] +'</p></td>';
    // check for status badge type
    if (values[4] == "inactive"){
        row_html_part1 += '<td><span class="badge badge_inactive">Inactive</span></td>';
    }else if(values[4] == "open"){
        row_html_part1 += '<td><span class="badge badge_open">Open</span></td>';
    }else if(values[4] == "paid"){
        row_html_part1 += '<td><span class="badge badge_paid">Paid</span></td>';
    }else if(values[4] == "due"){
        row_html_part1 += '<td><span class="badge badge_due">Due</span></td>';
    };
    // check if balance is positive or negative
    let balance_value = '<td class="num-row"><p class="positive">$' + values[6].toFixed(2) + '</p><p class="denom">CAD</p></td>';
    if (values[6] < 0){
        balance_value = '<td class="num-row"><p class="negative">-$' + Math.abs(values[6]).toFixed(2) + '</p><p class="denom">CAD</p></td>';
    };
    // complete denominations amounts
    let row_html_part2 = '<td class="num-row"><p>$'+ values[5].toFixed(2) +'</p><p class="denom">CAD</p></td>' +
    balance_value +
    '<td class="num-row"><p>$'+ values[7].toFixed(2) +'</p><p class="denom">CAD</p></td>' +
    '<td class="small-col"><span class="icon-actions"></span></td>' +
    '</tr>';

    // build full html String to insert
    let full_row = row_html_part1 + row_html_part2;
    table_body.insertAdjacentHTML("beforeend", full_row);

    // update count
    count += 1;

};