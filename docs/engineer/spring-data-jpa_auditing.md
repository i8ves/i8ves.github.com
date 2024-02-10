# Spring Data JPA 中的自动赋值(Auditing)

- [参考资料来源：CnBlogs](https://www.cnblogs.com/siweipancc/articles/Spring_Data_JPA_Auditing.html)


1. 在启动类中添加注解：`@EnableJpaAuditing`
2. 在实体上添加：`@EntityListeners(value = {AuditingEntityListener.class})`
3. 在字段`@CreatedDate`，`@CreatedBy`，`@LastModifiedDate`，`@LastModifiedBy`
4. 实现 AuditorAware 告诉 JPA 当前用户

```
@Component
public class AuditorAwareImpl implements AuditorAware<Long> {
    @Override
    public Optional<Long> getCurrentAuditor() {
        try {
            // IllegalStateException
            RequestAttributes requestAttributes = RequestContextHolder.currentRequestAttributes();
            Object userIdObject = requestAttributes.getAttribute("userId", RequestAttributes.SCOPE_SESSION);
            if (userIdObject == null) {
                return Optional.empty();
            }
            // ClassCastException
            Long userId = (Long) userIdObject;
            return Optional.of(userId);
        } catch (IllegalStateException | ClassCastException e) {
            return Optional.empty();
        }
    }
}
```

```
// 当集成了 Security 的时候，可以从 SecurityContextHolder 取得
@Component
public  class AuditorAwareSecurityImpl implements AuditorAware<Long> {
    @Override
    public Optional<Long> getCurrentAuditor() {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            Customer customer = (Customer) authentication.getPrincipal();
            return Optional.of(customer.getId());
        } catch (ClassCastException e) {
            return Optional.empty();
        }

    }
}
```


