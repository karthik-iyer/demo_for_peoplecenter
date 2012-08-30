class Candidate::CandidateController < ApplicationController
  
  def new
    render "candidate/createaccount"
  end
  
  def edit
  end
  
  def createaccount
    render "candidate/login"
  end
  
  def destroy
    
  end
  
  def update
    
  end
  
  def index
    
     
  end
  
  def loginaccount
    @email = params[:email]
    render "candidate/viewupdateprofile"
  end

def sendemail
 @flag1 = Candidate.userexists!(params[:emailtxtname])
 @emailacc = params[:emailtxtname]
 @password = params[:passwordreset]
 if(@flag1 == true)
   
 candidate =  Candidate.getCandidateinfo(params[:emailtxtname])
   
   
   
   
 redirect_to :action => :loginaccount, :email => @emailacc, :perishable_token => candidate.perishable_token
 else
   
    respond_to do |format|

         format.html { render :template => "candidate/login" }

     end
 end
   
 
end
  
  def userexists
    
    @flag1 = Candidate.userexists!(params[:email])
    bool_flag = false
    params.each do |key,value|
      if value.blank?
        bool_flag = true
      end
    end
    
    if bool_flag == true
          if @flag1 == false 
              @emailaddr = params[:email]
          else @flag1 == true 
              @emailaddr = ""
          end
          respond_to do |format|

              format.html { render :template => "candidate/createaccount" }

          end
    else
          redirect_to :action => :createnewuser
    end
    
    
    
  end
  
  def createnewuser
    
    respond_to do |format|
        format.html { render :template => "site/index" }
    end
    
  end
  
  
end
