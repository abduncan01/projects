#include <stdio.h>
#include <ctype.h>

double circleArea(double diameter);
char category(char ch);
void upperTwo(char *ch1, char *ch2);
char getCommand();
int sleep();

int main() {
char choice;
double diameter;
char ch;
char ch1;
char ch2;

 while(1) {
     
    printf("a: compute the area of a circle\nb: categorize a character\nc: convert two characters to upper case \nq: quit \nEnter your choice.\n");
    scanf("%c", &choice);
    
    switch (choice) {
        case 'a' :
         printf("Enter the diameter.\n");
         scanf("\n%lf", &diameter);
          circleArea(diameter);
        break;
        
        case 'b' :
         printf("Enter a character.\n");
         scanf("\n%c", &ch);
          category(ch);
        break;
        
        case 'c' :
         printf("Enter a character.\n");
         scanf("%c\n", &ch1);
         printf("Enter another character.\n");
         scanf("%c\n", &ch2);
        
         upperTwo(ch1, ch2);
        break;
     
        case 'q' :
        printf("\nQuit");
        return 0;
    
    }  
  }
}

// return area of circle based on diameter 
double circleArea(double diameter) {
 double radius = diameter/2;
 double area = 3.14 * radius * radius;
  printf("The area of the circle is %lf\n", area);
  sleep(2);
}
// return 'a' if the character is alphanumeric 
// return 'd' if the character is a digit 
// return 'p' if the character is punctuation 
char category(char ch) {
     if(isalpha(ch)) {
         printf("a\n");
     }
     else if(isdigit(ch)) {
         printf("d\n");
     }
     else if(ispunct(ch)) {
         printf("p\n");
     }
    sleep(1);
}
// return ch1 and ch2 converted to upper case 
// if ch1 and ch2 are not lower case characters,  
// return them unchanged   
void upperTwo(char *ch1, char *ch2) {
 *ch1 = &ch1;
 *ch2 = &ch2;
 printf("The characters are now %c & %c", toupper(*ch1), toupper(*ch2));
 sleep(2);
}
char getCommand() {
 char choice;
 printf("a: compute the area of a circle\nb: categorize a character\nc: convert two characters to upper case \nq: quit \nEnter your choice.\n");
 scanf("%c", &choice);   
}
