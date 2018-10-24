import { Component } from '@angular/core';
import { IonicPage, NavController ,Platform } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
import pdfMake from  'pdfmake/build/pdfmake';
import pdfFonts from  'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

/**
 * Generated class for the SuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-success',
  templateUrl: 'success.html',
})
export class SuccessPage {
// Variable
id11011_01 = null   ;   id11011_02 = null   ;   id11011_03 = null    ;   id11011_04 = null ;
id11079_01 = null   ;   id11079_02 = null   ;   id11079_03 = null    ;   id11079_04 = null   ;
id11083_01 = null   ;   id11083_02 = null   ;   id11083_03 = null    ;   id11083_04 = null   ;
id11089_01 = null   ;   id11089_02 = null   ;   id11089_03 = null    ;   id11089_04 = null   ;
id11093_01 = null   ;   id11093_02 = null   ;   id11093_03 = null    ;   id11093_04 = null   ;
id11095_01 = null   ;   id11095_02 = null   ;   id11095_03 = null    ;   id11095_04 = null   ;
id11113_01 = null   ;   id11113_02 = null   ;   id11113_03 = null    ;   id11113_04 = null   ;
id11114_01 = null   ;   id11114_02 = null   ;   id11114_03 = null    ;   id11114_04 = null   ;
id11115_01 = null   ;   id11115_02 = null   ;   id11115_03 = null    ;   id11115_04 = null   ;
id11116_01 = null   ;   id11116_02 = null   ;   id11116_03 = null    ;   id11116_04 = null   ;
id11120_01 = null   ;   id11120_02 = null   ;   id11120_03 = null    ;   id11120_04 = null   ;
id11135_01 = null   ;   id11135_02 = null   ;   id11135_03 = null    ;   id11135_04 = null   ;
id11137_01 = null   ;   id11137_02 = null   ;   id11137_03 = null    ;   id11137_04 = null   ;
id11138_01 = null   ;   id11138_02 = null   ;   id11138_03 = null    ;   id11138_04 = null   ;
id11146_01 = null   ;   id11146_02 = null   ;   id11146_03 = null    ;   id11146_04 = null   ;
id11148_01 = null   ;   id11148_02 = null   ;   id11148_03 = null    ;   id11148_04 = null   ;
id11149_01 = null   ;   id11149_02 = null   ;   id11149_03 = null    ;   id11149_04 = null   ;
id11172_01 = null   ;   id11172_02 = null   ;   id11172_03 = null    ;   id11172_04 = null   ;
id11175_01 = null   ;   id11175_02 = null   ;   id11175_03 = null    ;   id11175_04 = null   ;
id11178_01 = null   ;   id11178_02 = null   ;   id11178_03 = null    ;   id11178_04 = null   ;
id11179_01 = null   ;   id11179_02 = null   ;   id11179_03 = null    ;   id11179_04 = null   ;
id11180_01 = null   ;   id11180_02 = null   ;   id11180_03 = null    ;   id11180_04 = null   ;
id11181_01 = null   ;   id11181_02 = null   ;   id11181_03 = null    ;   id11181_04 = null   ;
id11182_01 = null   ;   id11182_02 = null   ;   id11182_03 = null    ;   id11182_04 = null   ;
id11183_01 = null   ;   id11183_02 = null   ;   id11183_03 = null    ;   id11183_04 = null   ;
id11184_01 = null   ;   id11184_02 = null   ;   id11184_03 = null    ;   id11184_04 = null   ;
id11185_01 = null   ;   id11185_02 = null   ;   id11185_03 = null    ;   id11185_04 = null   ;
id11196_01 = null   ;   id11196_02 = null   ;   id11196_03 = null    ;   id11196_04 = null   ;

id12012_01 = null   ;   id12012_02 = null   ;   id12012_03 = null    ;   id12012_04 = null   ;
id12016_01 = null   ;   id12016_02 = null   ;   id12016_03 = null    ;   id12016_04 = null   ;
id12017_01 = null   ;   id12017_02 = null   ;   id12017_03 = null    ;   id12017_04 = null   ;
id12028_01 = null   ;   id12028_02 = null   ;   id12028_03 = null    ;   id12028_04 = null   ;
id12030_01 = null   ;   id12030_02 = null   ;   id12030_03 = null    ;   id12030_04 = null   ;
id12033_01 = null   ;   id12033_02 = null   ;   id12033_03 = null    ;   id12033_04 = null   ;
id12038_01 = null   ;   id12038_02 = null   ;   id12038_03 = null    ;   id12038_04 = null   ;
id21123_01 = null   ;   id21123_02 = null   ;   id21123_03 = null    ;   id21123_04 = null   ;
id21125_01 = null   ;   id21125_02 = null   ;   id21125_03 = null    ;   id21125_04 = null   ;
id21150_01 = null   ;   id21150_02 = null   ;   id21150_03 = null    ;   id21150_04 = null   ;



pdfObj = null;
constructor(public navCtrl: NavController, public plt: Platform ,public file: File,public fileOpener: FileOpener) {

}

onClick(){

this.id11011_04 = (parseInt(this.id11011_02)*26) + parseInt(this.id11011_03) ; // Algorithm
this.id11079_04 = (parseInt(this.id11079_02)*16) + parseInt(this.id11079_03) ;
this.id11083_04 = (parseInt(this.id11083_02)*31) + parseInt(this.id11083_03) ;
this.id11089_04 = (parseInt(this.id11089_02)*20) + parseInt(this.id11089_03) ;
this.id11093_04 = (parseInt(this.id11093_02)*12) + parseInt(this.id11093_03) ;
this.id11095_04 = (parseInt(this.id11095_02)*12) + parseInt(this.id11095_03) ;
this.id11113_04 = (parseInt(this.id11113_02)*31) + parseInt(this.id11113_03) ;
this.id11114_04 = (parseInt(this.id11114_02)*60) + parseInt(this.id11114_03) ;
this.id11115_04 = (parseInt(this.id11115_02)*60) + parseInt(this.id11115_03) ;
this.id11116_04 = (parseInt(this.id11116_02)*27) + parseInt(this.id11116_03) ;
this.id11120_04 = (parseInt(this.id11120_02)*48) + parseInt(this.id11120_03) ;
this.id11135_04 = (parseInt(this.id11135_02)*32) + parseInt(this.id11135_03) ;
this.id11137_04 = (parseInt(this.id11137_02)*45) + parseInt(this.id11137_03) ;
this.id11138_04 = (parseInt(this.id11138_02)*1 ) + parseInt(this.id11138_03) ;
this.id11146_04 = (parseInt(this.id11146_02)*5 ) + parseInt(this.id11146_03) ;
this.id11148_04 = (parseInt(this.id11148_02)*1 ) + parseInt(this.id11148_03) ;
this.id11149_04 = (parseInt(this.id11149_02)*10) + parseInt(this.id11149_03) ;
this.id11172_04 = (parseInt(this.id11172_02)*12) + parseInt(this.id11172_03) ;
this.id11175_04 = (parseInt(this.id11175_02)*1 ) + parseInt(this.id11175_03) ;
this.id11178_04 = (parseInt(this.id11178_02)*16) + parseInt(this.id11178_03) ;
this.id11179_04 = (parseInt(this.id11179_02)*40) + parseInt(this.id11179_03) ;
this.id11180_04 = (parseInt(this.id11180_02)*27) + parseInt(this.id11180_03) ;
this.id11181_04 = (parseInt(this.id11181_02)*16) + parseInt(this.id11181_03) ;
this.id11182_04 = (parseInt(this.id11182_02)*40) + parseInt(this.id11182_03) ;
this.id11183_04 = (parseInt(this.id11183_02)*20) + parseInt(this.id11183_03) ;
this.id11184_04 = (parseInt(this.id11184_02)*27) + parseInt(this.id11184_03) ;
this.id11185_04 = (parseInt(this.id11185_02)*27) + parseInt(this.id11185_03) ;
this.id11196_04 = (parseInt(this.id11196_02)*60) + parseInt(this.id11196_03) ;

this.id12012_04 = (parseInt(this.id12012_02)*6) + (parseInt(this.id12012_03)*2.64) ;
this.id12016_04 = (parseInt(this.id12016_02)*12) + parseInt(this.id12016_03) ;
this.id12017_04 = (parseInt(this.id12017_02)*6) + (parseInt(this.id12017_03)*2.64) ;
this.id12028_04 = (parseInt(this.id12028_02)*20) + parseInt(this.id12028_03) ;
this.id12030_04 = (parseInt(this.id12030_02)*15) + parseInt(this.id12030_03) ;
this.id12033_04 = (parseInt(this.id12033_02)*45) + parseInt(this.id12033_03) ;
this.id12038_04 = (parseInt(this.id12038_02)*20) + parseInt(this.id12038_03) ;
this.id21123_04 = (parseInt(this.id21123_02)*1) + (parseInt(this.id21123_03)/12) ;
this.id21125_04 = (parseInt(this.id21125_02)*30) + parseInt(this.id21125_03) ;
this.id21150_04 = (parseInt(this.id21150_02)*25) + parseInt(this.id21150_03) ;

 // Cheack null
if (this.id11011_02 == null || this.id11011_03 == null){ this.id11011_04 = '';}
if (this.id11079_02 == null || this.id11079_03 == null){ this.id11079_04 = '';}
if (this.id11083_02 == null || this.id11083_03 == null){ this.id11083_04 = '';}
if (this.id11089_02 == null || this.id11089_03 == null){ this.id11089_04 = '';}
if (this.id11093_02 == null || this.id11093_03 == null){ this.id11093_04 = '';}
if (this.id11095_02 == null || this.id11095_03 == null){ this.id11095_04 = '';}
if (this.id11113_02 == null || this.id11113_03 == null){ this.id11113_04 = '';}
if (this.id11114_02 == null || this.id11114_03 == null){ this.id11114_04 = '';}
if (this.id11115_02 == null || this.id11115_03 == null){ this.id11115_04 = '';}
if (this.id11116_02 == null || this.id11116_03 == null){ this.id11116_04 = '';}
if (this.id11120_02 == null || this.id11120_03 == null){ this.id11120_04 = '';}
if (this.id11135_02 == null || this.id11135_03 == null){ this.id11135_04 = '';}
if (this.id11137_02 == null || this.id11137_03 == null){ this.id11137_04 = '';}
if (this.id11138_02 == null || this.id11138_03 == null){ this.id11138_04 = '';}
if (this.id11146_02 == null || this.id11146_03 == null){ this.id11146_04 = '';}
if (this.id11148_02 == null || this.id11148_03 == null){ this.id11148_04 = '';}
if (this.id11149_02 == null || this.id11149_03 == null){ this.id11149_04 = '';}
if (this.id11172_02 == null || this.id11172_03 == null){ this.id11172_04 = '';}
if (this.id11175_02 == null || this.id11175_03 == null){ this.id11175_04 = '';}
if (this.id11178_02 == null || this.id11178_03 == null){ this.id11178_04 = '';}
if (this.id11179_02 == null || this.id11179_03 == null){ this.id11179_04 = '';}
if (this.id11180_02 == null || this.id11180_03 == null){ this.id11180_04 = '';}
if (this.id11181_02 == null || this.id11181_03 == null){ this.id11181_04 = '';}
if (this.id11182_02 == null || this.id11182_03 == null){ this.id11182_04 = '';}
if (this.id11183_02 == null || this.id11183_03 == null){ this.id11183_04 = '';}
if (this.id11184_02 == null || this.id11184_03 == null){ this.id11184_04 = '';}
if (this.id11185_02 == null || this.id11185_03 == null){ this.id11185_04 = '';}
if (this.id11196_02 == null || this.id11196_03 == null){ this.id11196_04 = '';}
if (this.id12012_02 == null || this.id12012_03 == null){ this.id12012_04 = '';}
if (this.id12016_02 == null || this.id12016_03 == null){ this.id12016_04 = '';}
if (this.id12017_02 == null || this.id12017_03 == null){ this.id12017_04 = '';}
if (this.id12028_02 == null || this.id12028_03 == null){ this.id12028_04 = '';}
if (this.id12030_02 == null || this.id12030_03 == null){ this.id12030_04 = '';}
if (this.id12033_02 == null || this.id12033_03 == null){ this.id12033_04 = '';}
if (this.id12038_02 == null || this.id12038_03 == null){ this.id12038_04 = '';}
if (this.id21123_02 == null || this.id21123_03 == null){ this.id21123_04 = '';}
if (this.id21125_02 == null || this.id21125_03 == null){ this.id21125_04 = '';}
if (this.id21150_02 == null || this.id21150_03 == null){ this.id21150_04 = '';}
}

//createPdf(){ 
//}




downloadPdf(){
  var docDefinion ={
    content:[
      { text: new Date().toDateString(), alignment: 'right' },
      { text: " ", alignment : "center"},
      { text: "McDonald's Store Management System", alignment : "center"},
      { text: " ", alignment : "center"},
      { text: " ", alignment : "center"} ,

      {
        layout: 'lightHorizontalLines', // optional
        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          widths: [70,250, 100, '*' ],
  
          body: [
            [ 'LD R.I.#   ' , 'Description           ' , 'CS-Unit'       , 'Unit'           ], // Table PDF
            [ '0 11011/000' , 'PORK PATTY            ' , this.id11011_01 ,  this.id11011_04 ],
            [ '0 11079/000' , 'APMC                  ' , this.id11079_01 ,  this.id11079_04 ],
            [ '0 11083/000' , 'Fro. Chicken Strip    ' , this.id11083_01 ,  this.id11083_04 ],
            [ '0 11089/000' , 'Pork Sausage          ' , this.id11089_01 ,  this.id11089_04 ],
            [ '0 11093/000' , 'Canadian Bacon New    ' , this.id11093_01 ,  this.id11093_04 ],
            [ '0 11095/000' , 'OPTIMIZED SAMURAI     ' , this.id11095_01 ,  this.id11095_04 ],
            [ '0 11113/000' , 'Frozen CHK Srip-CP    ' , this.id11113_01 ,  this.id11113_04 ],
            [ '0 11114/000' , 'PINEAPPLE PIE/TUF     ' , this.id11114_01 ,  this.id11114_04 ],
            [ '0 11115/000' , 'CORN PIE/TUF          ' , this.id11115_01 ,  this.id11115_04 ],
            [ '0 11116/000' , 'FROZEN SPICY SBL-CP   ' , this.id11116_01 ,  this.id11116_04 ],
            [ '0 11120/000' , 'Chicken Nuggets       ' , this.id11120_01 ,  this.id11120_04 ],
            [ '0 11135/000' , 'FOF 90:10 No Sugar    ' , this.id11135_01 ,  this.id11135_04 ],
            [ '0 11137/000' , 'value chicken Patty   ' , this.id11137_01 ,  this.id11137_04 ],
            [ '0 11138/000' , 'Frozen Basil sauce    ' , this.id11138_01 ,  this.id11138_04 ],
            [ '0 11146/000' , 'Green Sicky Rice Fr   ' , this.id11146_01 ,  this.id11146_04 ],
            [ '0 11148/000' , 'ChocBrownie Diced FZ  ' , this.id11148_01 ,  this.id11148_04 ],
            [ '0 11149/000' , 'Frozen Fried Stick    ' , this.id11149_01 ,  this.id11149_04 ],
            [ '0 11172/000' , 'RawKurobutatty118G    ' , this.id11172_01 ,  this.id11172_04 ],
            [ '0 11175/000' , 'Mixd Vegeables 1KG    ' , this.id11175_01 ,  this.id11175_04 ],
            [ '0 11178/000' , 'CP Frozen spicy BIC   ' , this.id11178_01 ,  this.id11178_04 ],
            [ '0 11179/000' , 'FROZEN GARLI WING     ' , this.id11179_01 ,  this.id11179_04 ],
            [ '0 11180/000' , 'FROZEN SPICY SBL      ' , this.id11180_01 ,  this.id11180_04 ],
            [ '0 11181/000' , 'GFPT FROZE SPICY BIC  ' , this.id11181_01 ,  this.id11181_04 ],
            [ '0 11182/000' , 'GFPT FZ GARLIC WING   ' , this.id11182_01 ,  this.id11182_04 ],
            [ '0 11183/000' , 'GFPT FZ SPICY DRUM    ' , this.id11183_01 ,  this.id11183_04 ],
            [ '0 11184/000' , 'GFPT FZ SPICY SBL     ' , this.id11184_01 ,  this.id11184_04 ],
            [ '0 11185/000' , 'CP FROZEN SPICY DRUM  ' , this.id11185_01 ,  this.id11185_04 ],
            [ '0 11196/000' , 'GreenCurryChickPIE    ' , this.id11196_01 ,  this.id11196_04 ],
            [ '0 12012/000' , 'US MCCAIN FRIES       ' , this.id12012_01 ,  this.id12012_04 ],
            [ '0 12016/000' , 'AUS English Muffi     ' , this.id12016_01 ,  this.id12016_04 ],
            [ '0 12017/000' , 'NZ FRIES              ' , this.id12017_01 ,  this.id12017_04 ],
            [ '0 12028/000' , 'Seasoned Beef PATTY   ' , this.id12028_01 ,  this.id12028_04 ],
            [ '0 12030/000' , 'ANGUS PATTY           ' , this.id12030_01 ,  this.id12030_04 ],
            [ '0 12033/000' , 'Hash Browns           ' , this.id12033_01 ,  this.id12033_04 ],
            [ '0 12038/000' , 'Beef PATTY 10:1       ' , this.id12038_01 ,  this.id12038_04 ],
            [ '0 21123/000' , 'SUNDAE MIX 12Kgs CP   ' , this.id21123_01 ,  this.id21123_04 ],
            [ '0 21125/000' , 'EGG NO.3(CS=3TRAY)    ' , this.id21125_01 ,  this.id21125_04 ],
            [ '0 21150/000' , 'Apple Slices          ' , this.id21150_01 ,  this.id21150_04 ]
          ]
        }
      }                          





    ],
    style: {
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        fontSize: 14,
        bold: true,
        margin: [0,15,0,0]
      },
      story: {
        italic: true,
        alignmen: 'center',
        width: '50%',
      }

    }
    
    
  }


  this.pdfObj = pdfMake.createPdf(docDefinion);


//-------------------------------------------------------------------------------------------------------


  if (this.plt.is('cordova')) {
    this.pdfObj.getBuffer((buffer) => {
      var utf8 = new Uint8Array(buffer);
      var binaryArray = utf8.buffer;
      var blob = new Blob([binaryArray],{ type: 'application/pdf'});

      this.file.writeFile(this.file.dataDirectory, 'myletter.pdf',blob,{ replace: true}).then(fileEntry => {
        this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf','application/pdf');
      })
    });

  } else {
    this.pdfObj.download();
  }
}

}









