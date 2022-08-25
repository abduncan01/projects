#include<stdio.h>

void printRev(int nums[], int len);

int main(void) {
const int LEN = 10;
int nums[LEN];

 for(int i = 0; i < LEN; i++) {
  nums[i] = i * 5;
   }
 printRev(nums, LEN);
}

void printRev(int nums[], int len) {
 printf("I will print every other number in reverse\n");
 sleep(2);
  for(int i=9; i>=0; i-=2) { 
   printf("pos %d contains %d\n", i, nums[i]);
 }
}
