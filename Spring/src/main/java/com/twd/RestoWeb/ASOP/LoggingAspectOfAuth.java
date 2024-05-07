package com.twd.RestoWeb.ASOP;

import com.twd.RestoWeb.entity.OurUsers;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class LoggingAspectOfAuth {


    @Pointcut("execution(* com.twd.RestoWeb.controller..*(..))")
    public void loggingPointCutRegister(){}


    @AfterReturning(
            value = "execution(* com.twd.RestoWeb.controller..*(..))",
            returning = "responseEntity"
    )
    public void afterLogin(JoinPoint joinPoint, ResponseEntity<?> responseEntity) {
        if (responseEntity != null && responseEntity.getBody() != null) {
            Object body = responseEntity.getBody();
            if (body instanceof OurUsers) {
                OurUsers user = (OurUsers) body;
                log.info("Returned user: {}", user);
            }
        }
    }
    @Before("loggingPointCutRegister()")
    public void beforeRegisterMethods(JoinPoint joinPoint) {

        log.info("Before executing register-api..."+joinPoint.getSignature().getName());
    }

    @After("loggingPointCutRegister()")
    public void afterRegisterMethods(JoinPoint joinPoint)
    {
        log.info("After executing register-api..."+joinPoint.getSignature().getName());
    }



}

