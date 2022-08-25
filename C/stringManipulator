#include <stdio.h>
#include <string.h>

void sleep();

int main(){
char a;
char b;
char c;
char q;
char choice;
char string1[50]; 
char string2[50];
char dest1[50];
char dest2[50];
while(choice !='q'){

printf("a: which string is longer?\n");
printf("b: which string comes first in dictionary order?\n");
printf("c: concatenate the first character of two words\n");
printf("q: quit\n");
printf("Enter you choice.\n");
scanf("%c",&choice);
getchar();

switch(choice) {
 case 'a':
  printf("Enter a word\n");
  scanf("%s", string1);
  getchar();
  printf("Enter another word\n");
  scanf("%s", string2);
  getchar();

 if (strlen(string1) > strlen(string2)){
  printf("%s is longer than %s\n", string1, string2);
  sleep(2);
}
 else if (strlen(string1) < strlen(string2)){
  printf("%s is longer than %s\n", string2, string1);
  sleep(2);
}
 else{
  printf("The strings are equal in length.\n");
  sleep(2);
}
 break;

 case 'b':
  printf("Enter a word\n");
  scanf("%s", string1);
  getchar();
  printf("Enter another word\n");
  scanf("%s", string2);
  getchar();

 if (strcmp(string1,string2) < 0 ) {
  printf("%s comes before %s\n", string1, string2);
  sleep(2);
} 
 else if (strcmp(string1,string2) > 0 ){
  printf("%s comes before %s\n", string2, string1);
  sleep(2);
}
 else {
  printf("%s and %s start with the same letter.\n", string1, string2);
  sleep(2);
}
 break;
 
 case 'c':
  printf("Enter a word\n");
  scanf("%s", string1);
  getchar();
  printf("Enter another word\n");
  scanf("%s", string2);

  getchar();
  printf("%s%s\n",string1,string2);
  strncat(dest1,string1,1);
  strncat(dest2,string2,1);
  printf("%s",dest1);
 return 0;
 break;
  }
 }
}
