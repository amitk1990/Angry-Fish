package Algos;
import java.util.*;
import java.util.regex.Pattern;
import java.io.*;
import java.util.Scanner;
/*
 * Pascal Scanner 
 * Program that recognizes a function gettoken() that 
 * recognizes the lexemes of the language 
 * and returns a token corresponding to that lexeme.
 * Written by AMIT.KARUNAKARAN (ak4742)
 * */

public class PascalScanner {

	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the file name ");
		String filePath = sc.nextLine();
		System.out.println("Output with the respective tokes are :");
		FileInputStream fileInput = new FileInputStream(filePath);	//file1.txt
		int r;
		String operatorPattern = "[+-/*^%$#@!(){}.,;]"; // Pattern match for operator
		while ((r = fileInput.read()) != -1) {
		   char c = (char) r;
		   StringBuffer sb = new StringBuffer(); //String buffer creator
		  
		   if(Character.isLetter(c)){
			   sb.append(c);
			  while((r = fileInput.read()) != -1){
				  char ch = (char) r;
				  if(Character.isLetterOrDigit(ch)){
					  sb.append(ch);
				  }else if(Character.isWhitespace(ch)){
					  System.out.println(sb+" tokenword");
					  sb.delete(0, sb.length());	// refresh the buffer
					  break;
				  }else if(Pattern.matches(operatorPattern, Character.toString(ch))){
					  System.out.println(sb+" tokenword");
					  System.out.println(ch+ " tokenop");
					  sb.delete(0, sb.length());	// refresh the buffer	
					  break;
				  }
			  }
		   }else if(Character.isDigit(c)){
			   sb.append(c);
			   while((r = fileInput.read()) != -1){
				   char ch = (char) r;
				   if(Character.isDigit(ch)){
					   sb.append(ch);
				   }else if(Character.isLetter(ch)){
					   System.out.println(sb+" tokennumber");
					   sb.delete(0, sb.length());	// refresh the buffer
					   sb.append(ch);
					   break;
				   }else if(Character.isWhitespace(ch)){
					   System.out.println(sb+" tokennumber");
					   sb.delete(0, sb.length());	// refresh the buffer
					   break;
				   }else if(Pattern.matches(operatorPattern, Character.toString(ch))) {
					   System.out.println(sb+" tokennumber");
					   System.out.println(ch+ " tokenop");
					   sb.delete(0, sb.length());	// refresh the buffer	
					   break;
				   }
			   }
		   }else if(Character.isWhitespace(c)){
			   sb.delete(0, sb.length());	// refresh the buffer	
			   continue;
		   }else if(Pattern.matches(operatorPattern, Character.toString(c))){
			   System.out.println(c+ " tokenop");
			   sb.delete(0, sb.length());	// refresh the buffer	
		   }
		}
		fileInput.close();
	}
}
