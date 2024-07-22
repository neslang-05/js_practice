#include<iostream>
using namespace std;

class Animal{
    private:
        int x,y;
    public:
        void fun();
};

class Dog : private Animal{
    private:
        int a,b;
    public:
        void funny();
};

class Bulldog : public Dog : private Animal{
    private:
        int a,b;
    public:
        void funny();
};
