import React from 'react';
import {Text, View} from 'react-native';

const jsonData = require('../../data/largeDataFromDb.json');

class Client {
    clientList = null;
    paginatedData = [];
    currentView = [];
    currentPage = 0;
    totalPages = 0;
    pageResultLength = 10;


    constructor() {
        this.clientList = jsonData;
    }

    log(){
        console.log('Current View: ', this.currentView);
        console.log('Current Page: ', this.currentPage);
        console.log('Total Pages:', this.totalPages);
    }

    getCurrentView(){
        this.log();
        let returnClients = [];
        if(this.currentPage == 0) {
            returnClients = this.fetchClientList();
        } else if(this.currentPage == this.totalPages) {
            this.currentPage = 0;
            returnClients = this.updateView();
        } else {
            returnClients = this.updateView(this.currentPage--);
        }

        return returnClients;
    }

    fetchClientList() {
        this.clientList = jsonData;
        this.paginateResults(this.clientList);
        return this.updateView(this.currentPage);
    }


    paginateResults(data) {
        this.totalPages = data.length / this.pageResultLength;

        while(data.length > 0) {
            console.log('Paginated Results: ', this.paginatedData.length);
            this.paginatedData.push(data.splice(0, this.pageResultLength));
        }
    }

    updateView(pageNumber = 0) {
        if (this.currentPage < this.totalPages) {
            pageNumber = this.currentPage++;
        }
        console.log(pageNumber);
        return this.currentView.concat(this.paginatedData[pageNumber]);
    }

    getCurrentList() {
        return this.clientList;
    }

    getCurrentPage(){
        return this.currentPage;
    }

    getTotalPages() {
        return this.totalPages;
    }

}

export default Client;